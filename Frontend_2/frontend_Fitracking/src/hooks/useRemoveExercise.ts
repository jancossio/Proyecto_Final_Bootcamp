import { UserRoutineExerciseInfo } from '../types/tipos';

export const useRemoveExercise = (setExercises: React.Dispatch<React.SetStateAction<UserRoutineExerciseInfo[]>>) => {
  const removeExercise = async (usuariId: number, rutinaDiaId: number, exerciciId: number) => {
    console.log(`API call: DELETE http://localhost:8080/rutina_ejercicio/${usuariId}/${rutinaDiaId}/${exerciciId}`);
    try {
      const response = await fetch(
        `http://localhost:8080/rutina_ejercicio/${usuariId}/${rutinaDiaId}/${exerciciId}`,
        { method: 'DELETE' }
      );

      if (response.ok) {
        console.log('Exercise deleted successfully from backend.');
        setExercises((prevExercises) => {
          console.log('Previous state:', prevExercises);
          const updatedExercises = prevExercises.filter((exercise) => exercise.id !== exerciciId);
          console.log('Updated state:', updatedExercises);
          return updatedExercises;
        });
      } else {
        console.error('Failed to delete exercise from backend. Status:', response.status);
        throw new Error('Failed to remove exercise');
      }
    } catch (error) {
      console.error('Error in removeExercise:', error);
    }
  };

  return { removeExercise };
};
