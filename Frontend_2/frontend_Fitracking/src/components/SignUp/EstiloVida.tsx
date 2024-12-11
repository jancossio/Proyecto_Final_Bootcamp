import React from 'react';
import { HealthFormData } from '../../types/health';

interface LifestyleSectionProps {
  formData: HealthFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Estilo de Vida</h2>
      
      {/* Removed grid, now each input will be in its own row */}
      <div className="space-y-4">
        <div>
          <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">
            Nivel de Actividad
          </label>
          <select
            id="activityLevel"
            name="activityLevel"
            value={formData.nivelActividad}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="sedentary">Sedentario (Poco o ningún ejercicio)</option>
            <option value="light">Ligero (Ejercito 1-3 veces/semana)</option>
            <option value="moderate">Moderado (Ejercicio 3-5 veces/semana)</option>
            <option value="active">Activo (Ejercicio 6-7 veces/semana)</option>
            <option value="very_active">Muy Activo (Atleta profesional/Trabajo físico)</option>
          </select>
        </div>

        <div>
          <label htmlFor="waterIntake" className="block text-sm font-medium text-gray-700">
            Vasos de agua al día
          </label>
          <input
            type="number"
            id="waterIntake"
            name="waterIntake"
            value={formData.consumoAgua}
            onChange={onChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700">
            Horas de sueño por noche
          </label>
          <input
            type="number"
            id="sleepHours"
            name="sleepHours"
            value={formData.horasSueno}
            onChange={onChange}
            min="0"
            max="24"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="stressLevel" className="block text-sm font-medium text-gray-700">
            Nivel de estrés (1-10)
          </label>
          <input
            type="range"
            id="stressLevel"
            name="stressLevel"
            value={formData.nivelEstres}
            onChange={onChange}
            min="1"
            max="10"
            className="mt-1 block w-full"
            required
          />
          <div className="text-center mt-1">{formData.nivelEstres}</div>
        </div>
      </div>
    </div>
  )
};