import { useState, useEffect } from 'react';
import { UserRoutineExerciseInfo } from '../types/tipos';

export const useFetchExercisesForDay = (userId: number, selectedDayId: number) => {
  const [exercises, setExercises] = useState<UserRoutineExerciseInfo[]>([]);

  const fetchExercisesForDay = async (dayId: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/rutina_ejercicio/user/${userId}/routine-day/${dayId}`
      );
      if (!response.ok) throw new Error('Failed to fetch exercises');

      const exercisesForDay = await response.json();
      const formattedExercises = exercisesForDay.map((exercise: any) => ({
        id: exercise.id ?? 0,
        userId: exercise.user?.id ?? 0,
        day: {
          id: exercise.routineDayWeek?.id ?? 0,
          name: exercise.routineDayWeek?.dayWeek ?? 'Unknown',
        },
        exercise: {
          id: exercise.exercise?.id ?? 0,
          name: exercise.exercise?.name ?? 'Unnamed Exercise',
          description: exercise.exercise?.description ?? '',
          repetitions: exercise.exercise?.repetitions ?? '',
          duration: exercise.exercise?.duration ?? 0,
          rest: exercise.exercise?.rest ?? 0,
          difficulty: exercise.exercise?.difficulty ?? '',
          category: exercise.exercise?.cathegory ?? '',
          image: exercise.exercise?.image ?? '',
        },
        focus: exercise.exerciseFocus ?? 'General',
        completed: Boolean(exercise.completedExercise),
      }));
      setExercises(formattedExercises);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  useEffect(() => {
    if (selectedDayId) {
      fetchExercisesForDay(selectedDayId);
    }
  }, [selectedDayId]);

  return { exercises, setExercises };
};