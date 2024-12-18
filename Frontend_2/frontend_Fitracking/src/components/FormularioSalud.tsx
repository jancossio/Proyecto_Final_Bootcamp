import React, { useState, useEffect } from 'react';
import { Clock, BarChart2, Target } from 'lucide-react';
import EJERCICIOS from '../datos/exercises'; // Import JSON file

interface Exercise {
  id: number;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
  category: string;
}

interface Routine {
  day: string;
  goal: string;
  exercises: Exercise[];
}

const ExerciseRoutinePage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [routine, setRoutine] = useState<Routine | null>(null);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
    // Simulate fetching routine for the selected day
    const fetchRoutine = () => {
      const mockRoutine: Routine = {
        day: selectedDay,
        goal: 'Strength Training',
        exercises: exerciseData // Use imported JSON data
      };
      setRoutine(mockRoutine);
    };

    fetchRoutine();
  }, [selectedDay]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header: Days of the Week */}
      <div className="flex justify-center space-x-4 mb-6">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Routine Frame */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {routine ? (
          <div>
            {/* Day and Goal */}
            <h2 className="text-2xl font-bold text-gray-800">{selectedDay}</h2>
            <p className="text-gray-600 text-lg mb-4">Goal: {routine.goal}</p>

            {/* Exercise List */}
            <div className="space-y-4">
              {routine.exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{exercise.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{exercise.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {exercise.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <BarChart2 className="w-4 h-4 mr-1" />
                          {exercise.difficulty}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Target className="w-4 h-4 mr-1" />
                          {exercise.category}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exercise.difficulty === 'Beginner'
                          ? 'bg-green-100 text-green-800'
                          : exercise.difficulty === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {exercise.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Loading routine...</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseRoutinePage;
