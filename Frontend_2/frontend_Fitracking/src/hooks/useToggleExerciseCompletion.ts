import { UserRoutineExerciseInfo } from '../types/tipos';

export const useToggleExerciseCompletion = (setExercises: React.Dispatch<React.SetStateAction<UserRoutineExerciseInfo[]>>) => {
    const toggleExerciseCompletion = async (
      userId: number,
      routineDayId: number,
      exerciseId: number,
      completed: boolean
    ) => {
      try {
        const response = await fetch(
          `http://localhost:8080/rutina_ejercicio/${userId}/${routineDayId}/${exerciseId}/completed?completed=${!completed}`,
          { method: 'PUT' }
        );
  
        console.log(`http://localhost:8080/rutina_ejercicio/${userId}/${routineDayId}/${exerciseId}/completed?completed=${!completed}`);
        console.log('Response status:', response.status, response.statusText);
  
        if (response.ok) {
          try {
            const updatedExercise = await response.json();
            setExercises((prevExercises) =>
              prevExercises.map((exercise) =>
                exercise.id === exerciseId
                  ? { ...exercise, completed: updatedExercise.completed }
                  : exercise
              )
            );
          } catch {
            console.log('Server response:', await response.text());
            setExercises((prevExercises) =>
              prevExercises.map((exercise) =>
                exercise.id === exerciseId
                  ? { ...exercise, completed: !completed }
                  : exercise
              )
            );
          }
        } else {
          throw new Error('Failed to toggle exercise completion');
        }
      } catch (error) {
        console.error('Error toggling exercise completion:', error);
      }
    };
  
    return { toggleExerciseCompletion };
  };
  