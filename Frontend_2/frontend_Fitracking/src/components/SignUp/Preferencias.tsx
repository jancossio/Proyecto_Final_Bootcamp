import React from 'react';
import { HealthFormData } from '../../types/health';
import { opcionesDieta, objetivosSalud} from '../../constants/healthData';

interface PreferencesSectionProps {
  formData: HealthFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCheckboxChange: (category: 'preferenciasDieta' | 'objetivos', valor: string) => void;
}

export const PreferencesSection: React.FC<PreferencesSectionProps> = ({ 
    formData, 
    onChange, 
    onCheckboxChange 
  }) => {
    return (
      <div className="space-y-6">
        <div>
          <label htmlFor="allergies" className="block text-lg font-medium text-gray-700 mb-2">
            Alergias
          </label>
          <textarea
            id="allergies"
            name="alergias"
            value={formData.alergias}
            onChange={onChange}
            placeholder="Describe tus alergias..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
          />
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Tipo de Dieta
          </h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3"> {/* Added grid layout */}
            {opcionesDieta.map((diet) => (
              <div key={diet.valor} className="flex items-center">
                <input
                  type="checkbox"
                  id={`diet-${diet.valor}`}
                  checked={formData.preferenciasDieta.includes(diet.valor)}
                  onChange={() => onCheckboxChange('preferenciasDieta', diet.valor)}
                  className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor={`diet-${diet.valor}`} className="ml-3 text-gray-700">
                  {diet.etiqueta}
                </label>
              </div>
            ))}
          </div>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Objetivos
          </h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-3"> {/* Added grid layout */}
            {objetivosSalud.map((goal) => (
              <div key={goal.valor} className="flex items-center">
                <input
                  type="checkbox"
                  id={`goal-${goal.valor}`}
                  checked={formData.objetivos.includes(goal.valor)}
                  onChange={() => onCheckboxChange('objetivos', goal.valor)}
                  className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor={`goal-${goal.valor}`} className="ml-3 text-gray-700">
                  {goal.etiqueta}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };