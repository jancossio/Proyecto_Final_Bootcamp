// PlanificadorDeEjercicio.tsx

import React, { useState } from 'react';
import ExerciseCard from '../components/PlanificadorEjercicio/ExerciseCard';
import RoutineHeader from '../components/PlanificadorEjercicio/RoutineHeader';
import DaySelector from '../components/PlanificadorEjercicio/DaySelector';
import ExerciseSearcher from '../components/PlanificadorEjercicio/ExerciseSearcher';

import { useFetchExercisesForDay } from '../hooks/useFetchExercisesForDay';
import { useRemoveExercise } from '../hooks/useRemoveExercise';
import { useToggleExerciseCompletion } from '../hooks/useToggleExerciseCompletion';

import { UserRoutineExerciseInfo } from '../types/tipos';

const userId = 1; // Replace with dynamic user ID from auth/context

const PlanificadorDeEjercicio: React.FC = () => {
  const [selectedDayId, setSelectedDayId] = useState<number>(1); // Default selected day ID (Monday)
  const [dayGoal, setDayGoal] = useState<string>('Upper Body'); // Default day goal
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Hook to fetch exercises
  const { exercises, setExercises } = useFetchExercisesForDay(userId, selectedDayId);

  // Hook to remove exercise
  const { removeExercise } = useRemoveExercise(setExercises);

  // Hook to toggle exercise completion
  const { toggleExerciseCompletion } = useToggleExerciseCompletion(setExercises);

  const defaultDays: UserRoutineExerciseInfo[] = [
    { id: 1, userId: 0, day: { id: 1, name: 'Monday' }, exercise: null, focus: '', completed: false },
    { id: 2, userId: 0, day: { id: 2, name: 'Tuesday' }, exercise: null, focus: '', completed: false },
    { id: 3, userId: 0, day: { id: 3, name: 'Wednesday' }, exercise: null, focus: '', completed: false },
    { id: 4, userId: 0, day: { id: 4, name: 'Thursday' }, exercise: null, focus: '', completed: false },
    { id: 5, userId: 0, day: { id: 5, name: 'Friday' }, exercise: null, focus: '', completed: false },
    { id: 6, userId: 0, day: { id: 6, name: 'Saturday' }, exercise: null, focus: '', completed: false },
    { id: 7, userId: 0, day: { id: 7, name: 'Sunday' }, exercise: null, focus: '', completed: false },
  ];

  const handleDaySelect = (dayId: number) => {
    const selected = defaultDays.find((day) => day.day.id === dayId);
    if (selected) {
      setSelectedDayId(dayId); // Update the selected day ID
      setDayGoal(selected.focus || 'Upper Body'); // Update the day goal (focus)
    }
  };

  const handleRemoveExercise = (exerciseId: number) => {
    removeExercise(userId, selectedDayId, exerciseId);
  };

  const handleToggleComplete = (exerciseId: number, completed: boolean) => {
    toggleExerciseCompletion(userId, selectedDayId, exerciseId, completed);
  };

  const addExerciseToRoutine = (userId: number, exerciseId: number, routineDayId: number, focus: string) => {
    // Add your logic for adding exercises here, or create a new hook for it
    console.log(`Adding exercise ${exerciseId} to routine day ${routineDayId} with focus ${focus}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Day Selector */}
      <DaySelector
        daysRoutine={defaultDays}
        selectedDayId={selectedDayId}
        onDaySelect={handleDaySelect}
      />

      {/* Routine Header */}
      <RoutineHeader
        dayName={defaultDays.find(day => day.id === selectedDayId)?.day.name || 'Monday'}
        dayGoal={dayGoal}
        onAddExercise={() => setIsSearchModalOpen(true)}
        onGenerateRoutine={(category) => console.log(`Generating routine for category: ${category}`)}
      />

      {/* Exercise List */}
      <div className="space-y-4 bg-white p-6 shadow-md rounded-lg">
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
          <p className="text-gray-500 text-center">No exercises for today.</p>
        )}
      </div>

      {/* Exercise Searcher Modal */}
      <ExerciseSearcher
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectExercise={(exercise) => {
          addExerciseToRoutine(userId, exercise.id, selectedDayId, 'Upper Body');
        }}
      />
    </div>
  );
};

export default PlanificadorDeEjercicio;
