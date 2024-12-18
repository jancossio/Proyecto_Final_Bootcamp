import { Ejercicio } from '../types/tipos';
import { EJERCICIOS } from '../datos/exercises';

export const generateRoutine = (category: string, count: number = 4): Ejercicio[] => {
  const categoryExercises = EJERCICIOS.filter(ex => ex.categoria === category);
  const shuffled = [...categoryExercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(exercise => ({
    ...exercise,
    completed: false
  }));
};