import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { UserRoutineExerciseInfo } from '../../types/tipos';

interface ExerciseCardProps {
  ejercicio: UserRoutineExerciseInfo;
  onRemove: () => void;
  onToggleComplete: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ ejercicio, onRemove, onToggleComplete }) => {
  // Check if ejercicio.exercise is defined before accessing its properties
  const exercise = ejercicio.exercise;
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow flex gap-4">
      {/* Left Side: Image */}
      {exercise?.image && (
        <div className="flex-shrink-0">
          <img
            src={exercise.image}
            alt={exercise.name}
            className="w-36 h-36 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Right Side: Details */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleComplete}
                className="p-1 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition-colors"
              >
                {
                ejercicio.completed? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </button>

              <h3 className="text-lg font-semibold text-gray-800">{exercise?.name}</h3>
            </div>
            <p className="text-gray-600 text-sm mt-1">{exercise?.description}</p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="flex items-center text-sm text-gray-500">
                <span className="w-4 h-4 mr-1">💪</span>
                {exercise?.repetitions}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="w-4 h-4 mr-1">⏳</span>
                Duration: {exercise?.duration} secs
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="w-4 h-4 mr-1">🛌</span>
                Rest: {exercise?.rest} secs
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                exercise?.difficulty === 'Principiante'
                  ? 'bg-green-100 text-green-800'
                  : exercise?.difficulty === 'Intermedio'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {exercise?.difficulty}
            </span>
            <button
              onClick={onRemove} // This triggers the removal
              className="p-1 hover:bg-red-100 rounded-full transition-colors"
              title="Remove exercise"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;