import React from 'react';
import { HealthFormData } from '../../types/health';

interface PersonalInfoSectionProps {
  formData: HealthFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-4">
      {/* Email Input */}
      <div className="mb-6">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      {/* Name Input */}
      <div className="mb-6">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      {/* Age, Weight, and Height Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
            Edad
          </label>
          <input
            type="number"
            id="age"
            name="edad"
            placeholder="Edad"
            value={formData.edad}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        {/* Weight */}
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
            Peso (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="peso"
            placeholder="Peso (kg)"
            value={formData.peso}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        {/* Height */}
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
            Altura (cm)
          </label>
          <input
            type="number"
            id="height"
            name="altura"
            placeholder="Altura (cm)"
            value={formData.altura}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>
      </div>
    </div>
  );
};
