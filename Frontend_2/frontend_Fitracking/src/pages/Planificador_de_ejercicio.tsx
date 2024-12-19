import React, { useState } from 'react';
import ExerciseCard from '../components/PlanificadorEjercicio/ExerciseCard';
import RoutineHeader from '../components/PlanificadorEjercicio/RoutineHeader';
import DaySelector from '../components/PlanificadorEjercicio/DaySelector';
import ExerciseSearcher from '../components/PlanificadorEjercicio/ExerciseSearcher';

import { useFetchExercisesForDay } from '../hooks/useFetchExercisesForDay';
import { useRemoveExercise } from '../hooks/useRemoveExercise';
import { useToggleExerciseCompletion } from '../hooks/useToggleExerciseCompletion';

import { UserRoutineExerciseInfo, ExerciseInfo } from '../types/tipos';

const userId = 1; // Replace with dynamic user ID from auth/context

const PlanificadorDeEjercicio: React.FC = () => {
  const [selectedDayId, setSelectedDayId] = useState<number>(1); // Default selected day ID (Monday)
  const [dayGoal, setDayGoal] = useState<string>('Tronco'); // Default day goal
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  //BORRAR

  // Hook to fetch exercises
  const { exercises, setExercises } = useFetchExercisesForDay(userId, selectedDayId);

  // Hook to remove exercise
  const { removeExercise } = useRemoveExercise(setExercises);

  // Hook to toggle exercise completion
  const { toggleExerciseCompletion } = useToggleExerciseCompletion(setExercises);

  const defaultDays: UserRoutineExerciseInfo[] = [
    { id: 1, userId: 0, day: { id: 1, name: 'Lunes' }, exercise: null, focus: '', completed: false },
    { id: 2, userId: 0, day: { id: 2, name: 'Martes' }, exercise: null, focus: '', completed: false },
    { id: 3, userId: 0, day: { id: 3, name: 'Miércoles' }, exercise: null, focus: '', completed: false },
    { id: 4, userId: 0, day: { id: 4, name: 'Jueves' }, exercise: null, focus: '', completed: false },
    { id: 5, userId: 0, day: { id: 5, name: 'Viernes' }, exercise: null, focus: '', completed: false },
    { id: 6, userId: 0, day: { id: 6, name: 'Sabado' }, exercise: null, focus: '', completed: false },
    { id: 7, userId: 0, day: { id: 7, name: 'Domingo' }, exercise: null, focus: '', completed: false },
  ];

  const handleDaySelect = (dayId: number) => {
    const selected = defaultDays.find((day) => day.day.id === dayId);
    if (selected) {
      setSelectedDayId(dayId); // Update the selected day ID
      setDayGoal(selected.focus || 'Tronco Superior'); // Update the day goal (focus)
    }
  };

  const handleRemoveExercise = (exerciseId: number) => {
    console.log("PDE: -> userId: "+userId+" selectedDayId: "+selectedDayId+" exerciseId: "+exerciseId);
    removeExercise(userId, selectedDayId, exerciseId);
  };

  const handleToggleComplete = (exerciseId: number, completed: boolean) => {
    toggleExerciseCompletion(userId, selectedDayId, exerciseId, completed);
  };

  const addExerciseToRoutine = (
    userId: number,
    routineDayId: number,
    focus: string,
    exercise: ExerciseInfo
  ) => {
    const newExercise = {
      id: Date.now(), // Temporary ID
      userId,
      day: { id: routineDayId, name: 'Monday' }, // Replace with actual day name
      exercise, // Use the actual exercise data
      focus,
      completed: false,
    };
  
    console.log('Adding new exercise:', newExercise);
  
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      {/* Centered Content */}
      <div className="sticky top-0 w-full max-w-4xl space-y-6">
        {/* Day Selector */}
        <DaySelector
          daysRoutine={defaultDays}
          selectedDayId={selectedDayId}
          onDaySelect={handleDaySelect}
        />
  
        {/* Routine Header */}
        <RoutineHeader
          dayName={defaultDays.find(day => day.id === selectedDayId)?.day.name || 'Lunes'}
          dayGoal={dayGoal}
          onAddExercise={() => setIsSearchModalOpen(true)}
          onGenerateRoutine={(category) => console.log(`Generating routine for category: ${category}`)}
        />
  
        {/* Exercise List */}
        <div className="space-y-4 p-6 bg-white shadow-md rounded-lg">
          {exercises.length > 0 ? (
            exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                ejercicio={exercise}
                onRemove={() => handleRemoveExercise(exercise.exercise!.id)}
                onToggleComplete={() => handleToggleComplete(exercise.exercise!.id, exercise.completed)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">No hay ejercicios por hoy.</p>
          )}
        </div>
      </div>
  
      {/* Exercise Searcher Modal */}
      <ExerciseSearcher
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectExercise={(exercise) => {
          console.log('Exercise selected from searcher:', exercise);
          addExerciseToRoutine(userId, selectedDayId, 'Tronco Superior', exercise);
        }}
        selectedDay={selectedDayId}
        dayGoal={dayGoal}
        userId={userId}
      />



    </div>
  );  
};  

export default PlanificadorDeEjercicio;
