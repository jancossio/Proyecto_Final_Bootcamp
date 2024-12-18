import { useState, useEffect } from 'react';
import { Routine, Ejercicio} from '../types/tipos';
import { ROUTINES } from '../datos/rutinas';

export const useRoutine = (selectedDay: string) => {
  const [routine, setRoutine] = useState<Routine | null>(null);

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const fetchedRoutine = ROUTINES.find((r) => r.day === selectedDay);
        if (fetchedRoutine) {
          setRoutine(fetchedRoutine);
        } else {
          throw new Error('Routine not found');
        }
      } catch (error) {
        console.error('Error fetching routine:', error);
        const fallbackRoutine = ROUTINES.find((r) => r.day === selectedDay);
        setRoutine(fallbackRoutine || null);
      }
    };

    fetchRoutine();
  }, [selectedDay]);

  const updateRoutine = (newRoutine: Routine) => {
    setRoutine(newRoutine);
  };

  const handleRemoveExercise = (index: number) => {
    if (routine) {
      const updatedExercises = [...routine.exercises];
      updatedExercises.splice(index, 1);
      setRoutine({ ...routine, exercises: updatedExercises });
    }
  };

  const handleAddExercise = (exercise: Ejercicio) => {
    if (routine) {
      const updatedExercises = [...routine.exercises, { ...exercise, completed: false }];
      setRoutine({ ...routine, exercises: updatedExercises });
    }
  };

  const handleToggleComplete = (index: number) => {
    if (routine) {
      const updatedExercises = [...routine.exercises];
      updatedExercises[index] = {
        ...updatedExercises[index],
        completado: !updatedExercises[index].completado
      };
      setRoutine({ ...routine, exercises: updatedExercises });
    }
  };

  return {
    routine,
    updateRoutine,
    handleRemoveExercise,
    handleAddExercise,
    handleToggleComplete
  };
};