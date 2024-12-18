import React, { useState } from "react";
import { PersonalInfoSection } from "../components/SignUp/Personalinfo";
import { LifestyleSection } from "../components/SignUp/EstiloVida";
import { PreferencesSection } from "../components/SignUp/Preferencias";
import { HealthFormData } from "../types/health";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";

const initialFormData: HealthFormData = {
  email: "",
  nombre: "",
  password: "",
  edad: 0,
  peso: 0,
  altura: 0,
  nivelActividad: "",
  consumoAgua: 0,
  horasSueno: 0,
  nivelEstres: 1,
  alergias: [],
  preferenciasDieta: [],
  objetivos: [],
};

export const Sign_up: React.FC = () => {
  const [formData, setFormData] = useState<HealthFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      name === "alergias"
        ? value.split(",").map((item) => item.trim())
        : type === "number"
        ? value
          ? parseFloat(value)
          : 0
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleCheckboxChange = (
    category: "preferenciasDieta" | "objetivos",
    value: string
  ) => {
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
      const response = await fetch("http://localhost:8080/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 409) {
        throw new Error("El correo electrónico ya está registrado.");
      }
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.message || `Error: ${response.statusText}`
        );
      }
  
      const result = await response.json();
      setSuccess(true);
      setFormData(initialFormData);
      setTimeout(() => {
        navigate("/Login");
      }, 2000); 
    } catch (err: unknown) {
      let errorMessage = "Ocurrió un error. Intenta nuevamente.";
  
      // Verificar si el error es una instancia de Error
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "string") {
        errorMessage = err;
      }
  
      console.error("Submission error:", err);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-8 sm:px-12 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-3xl p-8 space-y-6"
        >
          {/* Logo and Title in horizontal layout */}
          <div className="flex items-center justify-center mb-8">
            <a href="/" className="flex-shrink-0 mr-4">
              <img
                src="../../public/images/favicon.png"
                alt="logo"
                className="h-12 w-12 object-cover"
              />
            </a>
            <h1 className="text-3xl font-bold text-green-500">
              Regístrate
            </h1>
          </div>

          <PersonalInfoSection
            formData={formData}
            onChange={handleInputChange}
          />
          <LifestyleSection formData={formData} onChange={handleInputChange} />
          <PreferencesSection
            formData={formData}
            onChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
          />

          {error && (
            <div className="text-red-500 text-sm text-center">
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="text-green-500 text-sm text-center">
              <p>¡Registro exitoso! 🎉</p>
            </div>
          )}

          {/* Centered Submit Button and Login Link */}
          <div className="flex flex-col items-center space-y-4 mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full max-w-md bg-green-500 text-white py-3 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Enviando..." : "Regístrate"}
            </button>
            <p className="text-center text-green-600 letraverde">
              ¿Ya tienes cuenta?{" "}
              <a href="/Login" className="link">
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