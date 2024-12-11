import React from 'react';
import { PropiedadesControl } from '../../types/tipos';
import { formatearNombre } from '../../utilidades/formateo';

export const ControlPorcentaje: React.FC<PropiedadesControl> = ({
  nombre,
  valor,
  alCambiar,
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={nombre} className="text-sm font-medium text-gray-700">
          {formatearNombre(nombre)}
        </label>
        <span className="text-sm text-gray-500">{valor}%</span>
      </div>
      <input
        type="range"
        id={nombre}
        min="0"
        max="100"
        value={valor}
        onChange={(e) => alCambiar(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};