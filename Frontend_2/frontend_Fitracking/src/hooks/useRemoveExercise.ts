import { UserRoutineExerciseInfo } from '../types/tipos';

export const useRemoveExercise = (setExercises: React.Dispatch<React.SetStateAction<UserRoutineExerciseInfo[]>>) => {
    const removeExercise = async (usuariId: number, rutinaDiaId: number, exerciciId: number) => {
      try {
        const response = await fetch(
          `http://localhost:8080/rutina_ejercicio/${usuariId}/${rutinaDiaId}/${exerciciId}`,
          { method: 'DELETE' }
        );
  
        if (response.ok) {
          setExercises((prevExercises) =>
            prevExercises.filter((exercise) => exercise.id !== exerciciId)
          );
        } else {
          throw new Error('Failed to remove exercise');
        }
      } catch (error) {
        console.error('Error removing exercise:', error);
      }
    };
  
    return { removeExercise };
  };
  