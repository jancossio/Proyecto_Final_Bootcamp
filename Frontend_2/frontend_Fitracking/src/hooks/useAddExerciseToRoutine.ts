import { useState } from 'react';
import { ExerciseInfo } from '../types/tipos';

interface UseAddExerciseToRoutineProps {
  userId: number;
  selectedDay: number;
  dayGoal: string;
}

interface UseAddExerciseToRoutineResult {
  addExercise: (exercise: ExerciseInfo) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useAddExerciseToRoutine = ({
  userId,
  selectedDay,
  dayGoal,
}: UseAddExerciseToRoutineProps): UseAddExerciseToRoutineResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addExercise = async (exercise: ExerciseInfo) => {
    setLoading(true);
    setError(null);
  
    const payload = {
      userId,
      dayId: selectedDay,
      exerciseId: exercise.id, // Backend expects the exercise database ID
      exerciseFocus: dayGoal,
      completedExercise: false,
    };
  
    try {
      const response = await fetch('http://localhost:8080/rutina_ejercicio/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed to add exercise to routine');
  
      const data = await response.json();
      console.log('Exercise added successfully:', data);
  
      // Pass the backend response to update the state with the actual exercise
      return data;
    } catch (error) {
      console.error('Error adding exercise:', error);
      setError('Error adding exercise to routine');
    } finally {
      setLoading(false);
    }
  };
  

  return { addExercise, loading, error };
};

export default useAddExerciseToRoutine;
