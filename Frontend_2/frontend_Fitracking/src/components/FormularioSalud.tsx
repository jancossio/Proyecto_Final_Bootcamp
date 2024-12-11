import React from 'react';
import { Activity, Droplets, Moon, Brain, Apple, Heart } from 'lucide-react';
import { HealthFormData } from '../types/health';
import { nivelesActividad, opcionesDieta, objetivosSalud } from '../constants/healthData';

interface Props {
  onSubmit: (datos: HealthFormData) => void;
}

export default function FormularioSalud({ onSubmit }: Props) {
  const [datos, setDatos] = React.useState<HealthFormData>({
    email: '',
    nombre: '',
    password: '',
    edad: 0, // Cambiado de 0 a null
    peso: 0, // Cambiado de 0 a null
    altura: 0, // Cambiado de 0 a null
    nivelActividad: 'sedentario',
    consumoAgua: 0, // Cambiado de 0 a null
    horasSueno: 0, // Cambiado de 0 a null
    nivelEstres: 5,
    alergias: '',
    condicionesMedicas: [],
    preferenciasDieta: [],
    objetivos: []
  });

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Transformar datos para que coincidan con el backend
    const userData = {
      email: datos.email,
      nom: datos.nombre,
      contra: datos.password,
      edat: datos.edad,
      pes: datos.peso,
      altura: datos.altura,
      activitatFisica: datos.nivelActividad,
      consumAigua: datos.consumoAgua?.toString() || '0',
      horesSueno: datos.horasSueno,
      nivellEstres: datos.nivelEstres,
      alergia: datos.alergias, // Array nativo
      preferenciesDieta: datos.preferenciasDieta, // Array nativo
      objectius: datos.objetivos // Array nativo
    };

    try {
      const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setSuccess('Formulario enviado con éxito!');
        onSubmit(datos); // Notificar al padre
      } else {
        const errorData = await response.json();
        setError(errorData.message || '¡Algo salió mal!');
      }
    } catch {
      // Manejo de error genérico sin mostrar nada
      setSuccess('Error de red, por favor intente más tarde.');
    } finally {
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-green-500" /> Información personal
        </h2>

        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.email || ''}
              onChange={e => setDatos(prev => ({ ...prev, email: e.target.value }))} />
          </div>

          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.nombre}
              onChange={e => setDatos(prev => ({ ...prev, nombre: e.target.value }))} />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.password || ''}
              onChange={e => setDatos(prev => ({ ...prev, password: e.target.value }))} />
          </div>
        </div>
      </div>

      {/* Datos de estilo de vida */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-green-500" /> Estilo de vida
        </h2>

        <div className="space-y-4">
          {/* Nivel de actividad */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nivel de actividad</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.nivelActividad}
              onChange={e => setDatos(prev => ({ ...prev, nivelActividad: e.target.value }))}>
              {nivelesActividad.map(nivel => (
                <option key={nivel.valor} value={nivel.valor}>{nivel.etiqueta}</option>
              ))}
            </select>
          </div>

          {/* Consumo de agua */}
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
              <Droplets className="w-4 h-4" /> Consumo de agua (vasos/día)
            </label>
            <input
              type="number"
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.consumoAgua || ''}
              onChange={e => setDatos(prev => ({ ...prev, consumoAgua: Number(e.target.value) }))} />
          </div>

          {/* Horas de sueño */}
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
              <Moon className="w-4 h-4" /> Horas de sueño
            </label>
            <input
              type="number"
              min="0"
              max="24"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.horasSueno || ''}
              onChange={e => setDatos(prev => ({ ...prev, horasSueno: Number(e.target.value) }))} />
          </div>

          {/* Nivel de estrés */}
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
              <Brain className="w-4 h-4" /> Nivel de estrés (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              className="mt-1 block w-full accent-green-500"
              value={datos.nivelEstres}
              onChange={e => setDatos(prev => ({ ...prev, nivelEstres: Number(e.target.value) }))} />
            <div className="text-center mt-1">{datos.nivelEstres}</div>
          </div>
        </div>
      </div>

      {/* Información médica y dietética */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Apple className="w-5 h-5 text-green-500" /> Información médica y dietética
        </h2>

        <div className="space-y-4">
          {/* Alergias */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Alergias</label>
            <input
              type="text"
              placeholder="Lista tus alergias o escribe 'Ninguna'"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.alergias.join(', ')}
              onChange={e => setDatos(prev => ({ ...prev, alergias: e.target.value.split(',').map(item => item.trim()) }))} />
          </div>

          {/* Preferencias dietéticas */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferencias dietéticas</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {/* {opcionesDieta.map(opcion => (
                <label key={opcion} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={datos.preferenciasDieta.includes(opcion)}
                    onChange={() => {
                      setDatos(prev => ({
                        ...prev,
                        preferenciasDieta: prev.preferenciasDieta.includes(opcion)
                          ? prev.preferenciasDieta.filter(item => item !== opcion)
                          : [...prev.preferenciasDieta, opcion],
                      }));
                    }}
                  />
                  <span>{opcion}</span>
                </label>
              ))} */}
            </div>
          </div>

          {/* Objetivos de salud */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Objetivos de salud</label>
            <select
              multiple
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={datos.objetivos}
              onChange={e => setDatos(prev => ({
                ...prev,
                objetivos: Array.from(e.target.selectedOptions, option => option.value),
              }))}>
              {objetivosSalud.map(opcion => (
                <option key={opcion} value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Botón de envío */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full md:w-auto bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 disabled:bg-green-300"
          disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>

      {/* Mensajes de éxito y error */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {success && <p className="text-green-500 text-center mt-4">{success}</p>}
    </form>
  );
}