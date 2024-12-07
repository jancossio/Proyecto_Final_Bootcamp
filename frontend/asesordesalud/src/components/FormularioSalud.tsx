import React from 'react';
import { Activity, Droplets, Moon, Brain, Apple, Scale, Heart } from 'lucide-react';
import { HealthFormData } from '../types/health';
import { nivelesActividad, opcionesDieta, condicionesMedicas, objetivosSalud } from '../constants/healthData';

interface Props {
  onSubmit: (datos: HealthFormData) => void;
}

export default function FormularioSalud({ onSubmit }: Props) {
  const [datos, setDatos] = React.useState<HealthFormData>({
    nombre: '',
    edad: 0,
    peso: 0,
    altura: 0,
    nivelActividad: 'sedentario',
    consumoAgua: 0,
    horasSueno: 0,
    nivelEstres: 5,
    alergias: '',
    preferenciasDieta: [],
    condicionesMedicas: [],
    objetivos: [],
    presionArterial: {
      sistolica: 120,
      diastolica: 80
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(datos);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-green-500"  /> Información personal
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white"
              value={datos.nombre}
              onChange={e => setDatos(prev => ({ ...prev, nombre: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Edad</label>
              <input
                type="number"
                required
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white"
                value={datos.edad || ''}
                onChange={e => setDatos(prev => ({ ...prev, edad: Number(e.target.value) }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
              <input
                type="number"
                required
                step="0.1"
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white"
                value={datos.peso || ''}
                onChange={e => setDatos(prev => ({ ...prev, peso: Number(e.target.value) }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Altura (m)</label>
              <input
                type="number"
                required
                step="0.01"
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white"
                value={datos.altura || ''}
                onChange={e => setDatos(prev => ({ ...prev, altura: Number(e.target.value) }))}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-green-500" /> Estilo de vida
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nivel de actividad</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 "
              value={datos.nivelActividad}
              onChange={e => setDatos(prev => ({ ...prev, nivelActividad: e.target.value }))}
            >
              {nivelesActividad.map(nivel => (
                <option key={nivel.valor} value={nivel.valor}>
                  {nivel.etiqueta}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Droplets className="w-4 h-4" /> Consumo de agua (vasos/día)
              </label>
              <input
                type="number"
                required
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white"
                value={datos.consumoAgua || ''}
                onChange={e => setDatos(prev => ({ ...prev, consumoAgua: Number(e.target.value) }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Moon className="w-4 h-4" /> Horas de sueño
              </label>
              <input
                type="number"
                required
                min="0"
                max="24"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white"
                value={datos.horasSueno || ''}
                onChange={e => setDatos(prev => ({ ...prev, horasSueno: Number(e.target.value) }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
                <Brain className="w-4 h-4" /> Nivel de estrés (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                className="mt-1 block w-full accent-emerald-200 "
                value={datos.nivelEstres}
                onChange={e => setDatos(prev => ({ ...prev, nivelEstres: Number(e.target.value) }))}
              />
              <div className="text-center mt-1">{datos.nivelEstres}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Apple className="w-5 h-5 text-green-500" /> Información médica y dietética
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Alergias</label>
            <input
              type="text"
              placeholder="Lista tus alergias o escriba 'Ninguna'"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 "
              value={datos.alergias}
              onChange={e => setDatos(prev => ({ ...prev, alergias: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferencias dietéticas</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {opcionesDieta.map(opcion => (
                <label key={opcion} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={datos.preferenciasDieta.includes(opcion)}
                    onChange={() => {
                      setDatos(prev => ({
                        ...prev,
                        preferenciasDieta: prev.preferenciasDieta.includes(opcion)
                          ? prev.preferenciasDieta.filter(item => item !== opcion)
                          : [...prev.preferenciasDieta, opcion]
                      }));
                    }}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{opcion}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Objetivos de salud</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {objetivosSalud.map(objetivo => (
                <label key={objetivo} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={datos.objetivos.includes(objetivo)}
                    onChange={() => {
                      setDatos(prev => ({
                        ...prev,
                        objetivos: prev.objetivos.includes(objetivo)
                          ? prev.objetivos.filter(item => item !== objetivo)
                          : [...prev.objetivos, objetivo]
                      }));
                    }}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{objetivo}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-100 text-emerald-700 font-semibold	py-2 px-4 rounded-md hover:bg-emerald-200 transition-colors duration-200"
      >
        Obtener recomendaciones
      </button>
    </form>
  );
}