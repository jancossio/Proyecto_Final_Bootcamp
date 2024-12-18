// RoutineHeader.tsx

import React, { useState } from 'react';
import { Plus, Wand2 } from 'lucide-react';

interface RoutineHeaderProps {
  dayName: string;
  dayGoal: string;
  onAddExercise: () => void;
  onGenerateRoutine: (category: string) => void;
}

export const RoutineHeader: React.FC<RoutineHeaderProps> = ({
  dayName,
  dayGoal,
  onAddExercise,
  onGenerateRoutine,
}) => {
  const [showCategorySelect, setShowCategorySelect] = useState(false);
  const categories = ['Upper Body', 'Lower Body', 'Core', 'Cardio', 'Full Body', 'HIIT'];

  return (
    <div className="flex justify-between items-center mb-6">
      {/* Day Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{dayName}</h2>
        <p className="text-gray-600 text-lg">Focus: {dayGoal}</p>
      </div>

      {/* Buttons and Category Selector */}
      <div className="flex gap-2">
        {showCategorySelect ? (
          <select
            onChange={(e) => {
              onGenerateRoutine(e.target.value);
              setShowCategorySelect(false);
            }}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            autoFocus
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        ) : (
          <button
            onClick={() => setShowCategorySelect(true)}
            className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <Wand2 className="w-5 h-5 mr-2" />
            Auto Generate
          </button>
        )}

        <button
          onClick={onAddExercise}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Exercise
        </button>
      </div>
    </div>
  );
};

export default RoutineHeader;