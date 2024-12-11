import React from 'react';
import { HealthFormData } from '../../types/health';

interface PersonalInfoSectionProps {
  formData: HealthFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-4">
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

      <div className="grid grid-cols-3 gap-4">
        <div>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Edad"
            value={formData.edad}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Peso (kg)"
            value={formData.peso}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-full border-gray-200 focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <input
            type="number"
            id="height"
            name="height"
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