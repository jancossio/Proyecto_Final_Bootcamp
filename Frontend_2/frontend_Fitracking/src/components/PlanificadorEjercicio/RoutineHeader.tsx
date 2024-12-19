// RoutineHeader.tsx

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface RoutineHeaderProps {
  dayName: string;
  dayGoal: string;
  onAddExercise: () => void;
  onGenerateRoutine: (category: string) => void;
}

export const RoutineHeader: React.FC<RoutineHeaderProps> = ({
  dayName,
  dayGoal,
  onAddExercise,
  onGenerateRoutine,
}) => {
  const [showCategorySelect, setShowCategorySelect] = useState(false);
  const categories = ['Tronco Superior', 'Tronco Inferior', 'Torso', 'Cardio', 'Todo el cuerpo', 'Alta Intensidad'];

  return (
    <div className="flex justify-between items-center mb-4 px-6 py-3 bg-gray-50 shadow-sm rounded-lg">
      {/* Day Information */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">{dayName}</h2>
        <p className="text-base text-gray-600">Objetivo: {dayGoal}</p>
      </div>
  
      {/* Buttons and Category Selector */}
      <div className="flex gap-3">
        {showCategorySelect ? (
          <select
            onChange={(e) => {
              onGenerateRoutine(e.target.value);
              setShowCategorySelect(false);
            }}
            className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
            autoFocus
          >
            <option value="">Seleccionar Categoria</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        ) : (
          <button
            onClick={() => setShowCategorySelect(true)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
          >
            Seleccionar Categoria
          </button>
        )}
  
        <button
          onClick={onAddExercise}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Añadir Ejercicio
        </button>
      </div>
    </div>
  );  
};

export default RoutineHeader;