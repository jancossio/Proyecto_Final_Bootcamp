import React from 'react';
import { GraficoCircular } from './GraficoCircular';
import { ControlPorcentaje } from './ControlPorcentaje';
import { SugerenciaDieta } from './SugerenciasDieta';
import { usePorcentajes } from '../../hooks/UsePorcentajes.ts';
import { NUTRIENTES_INICIALES } from '../../constants/colores';

export const BalanceNutrientes = () => {
  const { porcentajes, actualizarPorcentaje, total } = usePorcentajes(NUTRIENTES_INICIALES);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Planificador de dieta
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <GraficoCircular datos={porcentajes} />
          {total !== 100 && (
            <p className="text-red-500 text-center mt-4">
              El total debe ser 100% (Actual: {total}%)
            </p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Ajusta los porcentajes de nutrientes
          </h2>
          {Object.entries(porcentajes).map(([nombre, valor]) => (
            <ControlPorcentaje
              key={nombre}
              nombre={nombre}
              valor={valor}
              alCambiar={(nuevoValor) => actualizarPorcentaje(nombre, nuevoValor)}
            />
          ))}
        </div>
      </div>

      <SugerenciaDieta porcentajes={porcentajes} />
    </div>
  );
};