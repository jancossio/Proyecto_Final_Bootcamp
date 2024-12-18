// PlanificadorDeEjercicio.tsx

import React, { useState, useEffect } from 'react';
import ExerciseCard from '../components/PlanificadorEjercicio/ExerciseCard';
import RoutineHeader from '../components/PlanificadorEjercicio/RoutineHeader';
import DaySelector from '../components/PlanificadorEjercicio/DaySelector';
import ExerciseSearcher from '../components/PlanificadorEjercicio/ExerciseSearcher';

import { UserRoutineExerciseInfo } from '../types/tipos';

const userId = 1; // Replace with dynamic user ID from auth/context

const PlanificadorDeEjercicio: React.FC = () => {
  const [selectedDayId, setSelectedDayId] = useState<number>(1); // Default selected day ID (Monday)
  const [dayGoal, setDayGoal] = useState<string>('Upper Body'); // Default day goal
  const [exercises, setExercises] = useState<UserRoutineExerciseInfo[]>([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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

  // Fetch exercises for the selected day
  const fetchExercisesForDay = async (dayId: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/rutina_ejercicio/user/${userId}/routine-day/${dayId}`
      );
      if (!response.ok) throw new Error('Failed to fetch exercises');
  
      const exercisesForDay = await response.json();
  
      // Adjust mapping to match the actual backend structure
      const formattedExercises = exercisesForDay.map((exercise: any) => ({
        id: exercise.id ?? 0,
        userId: exercise.user?.id ?? 0, // Extract user ID
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
        focus: exercise.exerciseFocus ?? 'General', // Map focus correctly
        completed: Boolean(exercise.completedExercise), // Map completed status
      }));
  
      setExercises(formattedExercises);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };
  
  

  // Fetch exercises whenever selectedDayId changes
  useEffect(() => {
    if (selectedDayId) {
      fetchExercisesForDay(selectedDayId);
    }
  }, [selectedDayId]);

  
  const handleRemoveExercise = async (usuariId: number, rutinaDiaId: number, exerciciId: number) => {

    try {
      const response = await fetch(`http://localhost:8080/rutina_ejercicio/${usuariId}/${rutinaDiaId}/${exerciciId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Remove the exercise from the local state if deletion was successful
        setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.id !== exerciciId));
      } else {
        throw new Error('Failed to remove exercise');
      }
    } catch (error) {
      console.error('Error removing exercise:', error);
    }
  };
  
  const handleToggleComplete = async (userId: number, routineDayId: number, exerciseId: number, completed: boolean) => {
    try {
      const response = await fetch(
        `http://localhost:8080/rutina_ejercicio/${userId}/${routineDayId}/${exerciseId}/completed?completed=${!completed}`,
        { method: 'PUT' }
      );
  
      console.log(`http://localhost:8080/rutina_ejercicio/${userId}/${routineDayId}/${exerciseId}/completed?completed=${!completed}`);
      console.log("Response status:", response.status, response.statusText);

      if (response.ok) {
        // Attempt to parse as JSON
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
          // Fallback to plain text
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
  

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Day Selector */}
      <DaySelector
        daysRoutine={defaultDays}
        selectedDayId={selectedDayId} // Pass selectedDayId instead of selectedDay
        onDaySelect={handleDaySelect}
      />

      {/* Routine Header */}
      <RoutineHeader
        dayName={defaultDays.find(day => day.id === selectedDayId)?.day.name || 'Monday'} // Get the name of the day based on selectedDayId
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
              onRemove={() => handleRemoveExercise(1, selectedDayId, exercise.exercise!.id)} // Pass exercise ID and current completed state
              onToggleComplete={() => handleToggleComplete(1, selectedDayId, exercise.exercise!.id, exercise.completed)} // Pass exercise ID and current completed state
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
          addExerciseToRoutine(userId, exercise.id, selectedDayId, 'tren lateral'); // Pass selectedDayId instead of selectedDay
        }}
      />
    </div>
  );
};

export default PlanificadorDeEjercicio;
