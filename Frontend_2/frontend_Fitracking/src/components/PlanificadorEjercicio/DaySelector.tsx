import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { UserRoutineExerciseInfo } from '../../types/tipos';

interface DaySelectorProps {
  daysRoutine: UserRoutineExerciseInfo[]; // List of days
  selectedDayId: number; // Pass the selected day ID as a number
  onDaySelect: (dayId: number) => void; // Function to handle day selection with dayId
}

const DaySelector: React.FC<DaySelectorProps> = ({ daysRoutine, selectedDayId, onDaySelect }) => {
    return (
    <div className="flex justify-center space-x-4 mb-6 overflow-x-auto py-2">
        {daysRoutine.map((dayRoutine) => (
          <button
          key={dayRoutine.id}
          onClick={() => onDaySelect(dayRoutine.id)} // Pass the day ID to onDaySelect
          className={`p-2 rounded-md text-sm ${selectedDayId === dayRoutine.id ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">{dayRoutine.day.name}</span>
            {dayRoutine.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300" />
            )}
            <span className="text-xs">{dayRoutine.focus || 'Cardio'}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default DaySelector;