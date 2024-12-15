import React, { useState } from 'react';
import { PropiedadesDieta, Receta } from '../types/tipos';
import { generarSugerencias, generarSugerenciasAleatorias } from '../utilidades/generadorDieta';

export const SugerenciaDieta: React.FC<PropiedadesDieta> = ({ porcentajes }) => {
  const [recetasSugeridas, setRecetasSugeridas] = useState<Receta[]>([]);

  const generarNuevaDieta = () => {
    setRecetasSugeridas(generarSugerencias(porcentajes));
  };

  const generarDietaAleatoria = () => {
    setRecetasSugeridas(generarSugerenciasAleatorias());
  };

  return (
    <div className="mt-8">
      <div className="flex gap-4 mb-6 justify-center">
        <button
          onClick={generarNuevaDieta}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generar menú diario
        </button>
        <button
          onClick={generarDietaAleatoria}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Menú aleatorio
        </button>
      </div>

      {recetasSugeridas.length > 0 && (
        <div className="space-y-8">
          {recetasSugeridas.map((receta, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {receta.tipoComida.charAt(0).toUpperCase() + receta.tipoComida.slice(1)}
                </span>
              </div>

              <div className="md:flex gap-6">
                <div className="md:w-1/3">
                  {receta.imagen && (
                    <img
                      src={receta.imagen}
                      alt={receta.nombre}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {receta.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4">{receta.descripcion}</p>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <p>⏱️ Tiempo: {receta.tiempoPreparacion}</p>
                      <p>🔥 Calorías: {receta.calorias} kcal</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-700">Ingredientes:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {receta.ingredientes.map((ingrediente, i) => (
                          <li key={i}>{ingrediente}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-gray-700">Preparación:</h4>
                      <ol className="list-decimal list-inside text-sm text-gray-600">
                        {receta.instrucciones.map((instruccion, i) => (
                          <li key={i}>{instruccion}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};