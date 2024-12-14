import React, { useState } from 'react';
import { PersonalInfoSection } from '../components/SignUp/Personalinfo';
import { LifestyleSection } from '../components/SignUp/EstiloVida';
import { PreferencesSection } from '../components/SignUp/Preferencias';
import { HealthFormData } from '../types/health';
import '../styles/Signup.css'; 

const initialFormData: HealthFormData = {
  email: '',
  nombre: '',
  password: '',
  edad: 0,
  peso: 0,
  altura: 0,
  nivelActividad: '',
  consumoAgua: 0,
  horasSueno: 0,
  nivelEstres: 0,
  alergias: '',
  preferenciasDieta: [],
  //condicionesMedicas: [],
  objetivos: [],
};

export const Sign_up: React.FC = () => {
  const [formData, setFormData] = useState<HealthFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('API Response:', result);

      // Indicate success to the user
      setSuccess(true);
      setFormData(initialFormData); // Clear form on success
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-8 sm:px-12 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-3xl p-8 space-y-6">
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src="../../public/images/favicon.png"
                alt="logo"
                className="h-10 w-10 object-cover"
              />
            </a>
            <h1 className="text-3xl font-bold text-green-500">Regístrate</h1>
          </div>

          <PersonalInfoSection formData={formData} onChange={handleInputChange} />
          <LifestyleSection formData={formData} onChange={handleInputChange} />
          <PreferencesSection
            formData={formData}
            onChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
          />

          {error && (
            <div className="text-red-500 text-sm">
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="text-green-500 text-sm">
              <p>¡Registro exitoso! 🎉</p>
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-500 text-white py-3 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Regístrate'}
            </button>
            <p className="text-center mt-4 text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <a href="#" className="text-green-500 hover:text-green-600">
                Inicia sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Sign_up;
