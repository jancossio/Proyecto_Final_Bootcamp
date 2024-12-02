import React from 'react';
import { HealthFormData, Recommendation } from '../types/health';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface Props {
  data: HealthFormData;
}

export default function Recommendations({ data }: Props) {
  const recommendations: Recommendation[] = React.useMemo(() => {
    const results: Recommendation[] = [];
    
    // Calculate BMI
    const bmi = data.weight / (data.height * data.height);
    if (bmi < 18.5) {
      results.push({
        type: 'warning',
        message: 'Your BMI indicates you are underweight. Consider consulting a nutritionist for a personalized meal plan.',
      });
    } else if (bmi >= 25 && bmi < 30) {
      results.push({
        type: 'warning',
        message: 'Your BMI indicates you are overweight. Focus on balanced nutrition and regular exercise.',
      });
    } else if (bmi >= 30) {
      results.push({
        type: 'error',
        message: 'Your BMI indicates obesity. We strongly recommend consulting a healthcare professional.',
      });
    } else {
      results.push({
        type: 'success',
        message: 'Your BMI is within the healthy range. Keep maintaining a balanced lifestyle!',
      });
    }

    // Water intake recommendations
    if (data.waterIntake < 8) {
      results.push({
        type: 'warning',
        message: `You're drinking ${data.waterIntake} glasses of water per day. Try to increase it to at least 8 glasses.`,
      });
    } else {
      results.push({
        type: 'success',
        message: 'Great job staying hydrated!',
      });
    }

    // Sleep recommendations
    if (data.sleepHours < 7) {
      results.push({
        type: 'warning',
        message: 'You might not be getting enough sleep. Aim for 7-9 hours per night.',
      });
    } else if (data.sleepHours > 9) {
      results.push({
        type: 'info',
        message: 'You're sleeping more than average. While this might be fine, consider checking with a doctor if you feel unusually tired.',
      });
    } else {
      results.push({
        type: 'success',
        message: 'Your sleep duration is optimal!',
      });
    }

    // Stress level recommendations
    if (data.stressLevel > 7) {
      results.push({
        type: 'warning',
        message: 'Your stress levels appear to be high. Consider stress-management techniques or consulting a professional.',
      });
    }

    // Activity level recommendations
    if (data.activityLevel === 'sedentary') {
      results.push({
        type: 'warning',
        message: 'Try to incorporate more physical activity into your daily routine. Start with short walks!',
      });
    }

    // Dietary preferences and allergies
    if (data.allergies && data.allergies.toLowerCase() !== 'none') {
      results.push({
        type: 'info',
        message: `Remember to always check food labels due to your allergies: ${data.allergies}`,
      });
    }

    if (data.dietaryPreferences.includes('Vegetarian') || data.dietaryPreferences.includes('Vegan')) {
      results.push({
        type: 'info',
        message: 'Ensure you're getting enough protein, B12, and iron through your plant-based diet.',
      });
    }

    return results;
  }, [data]);

  const getIcon = (type: Recommendation['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-green-500" />;
    }
  };

  const getBackgroundColor = (type: Recommendation['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'warning':
        return 'bg-yellow-50';
      case 'error':
        return 'bg-red-50';
      default:
        return 'bg-green-50';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Health Recommendations for {data.name}</h2>
      
      {recommendations.map((rec, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg flex items-start gap-3 ${getBackgroundColor(rec.type)}`}
        >
          {getIcon(rec.type)}
          <p className="text-gray-700">{rec.message}</p>
        </div>
      ))}
    </div>
  );
}