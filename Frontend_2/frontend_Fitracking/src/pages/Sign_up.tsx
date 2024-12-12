import React, { useState } from 'react';
import { PersonalInfoSection } from '../components/SignUp/Personalinfo';
import { LifestyleSection } from '../components/SignUp/EstiloVida';
import { PreferencesSection } from '../components/SignUp/Preferencias';
import { HealthFormData } from '../types/health';
import '../styles/Signup.css'; 

const initialFormData: HealthFormData = {
    email: '',
    name: '',
    password: '',
    edad: 18,
    peso: 65,
    altura: 1.65,
    nivelActividad: '',
    consumoAgua: 0,
    horasSueno: 6,
    nivelEstres: 5,
    alergias: '',
    preferenciasDieta: [],
    condicionesMedicas: [],
    objetivos: []
};

export const Sign_up: React.FC = () => {
  const [formData, setFormData] = useState<HealthFormData>(initialFormData);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
  
    // If it's a number field, convert the string value to a number
    const newValue = type === 'number' ? parseFloat(value) : value;
  
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleCheckboxChange = (category: 'preferenciasDieta' | 'objetivos', value: string) => {
    setFormData((prev) => {
      const currentValues = prev[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [category]: newValues,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-8 sm:px-12 lg:px-16">
      <div className="max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <h1>AQUI VA EL LOGO</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-3xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-500">Regístrate</h1>
          <PersonalInfoSection 
            formData={formData} 
            onChange={handleInputChange} 
          />
          
          <LifestyleSection 
            formData={formData} 
            onChange={handleInputChange} 
          />
          
          <PreferencesSection 
            formData={formData} 
            onChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
          />

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              Regístrate
            </button>
            <p className="text-center mt-4 text-gray-600">
              ¿Ya tienes cuenta? <a href="#" className="text-green-500 hover:text-green-600">Inicia sesión</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};