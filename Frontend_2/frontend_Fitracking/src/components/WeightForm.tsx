import React, { useState } from 'react';

interface FormularioPesoProps {
  onSubmit: (peso: number, fecha: Date) => void;
}

export const FormularioPeso: React.FC<FormularioPesoProps> = ({ onSubmit }) => {
  const [peso, setPeso] = useState<string>('');
  const [fecha, setFecha] = useState<string>(() => {
    // Fecha actual como valor inicial
    const hoy = new Date();
    return hoy.toISOString().split('T')[0]; // Formato "YYYY-MM-DD"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valorPeso = parseFloat(peso);
    const valorFecha = new Date(fecha);

    if (!isNaN(valorPeso) && valorPeso > 0 && !isNaN(valorFecha.getTime())) {
      onSubmit(valorPeso, valorFecha);
      setPeso('');
    }
  };

  return (
    <form className="weight-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          step="0.1"
          min="0"
          required
          placeholder="Ingrese su peso"
        />
      </div>
      <div className="input-group">
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </div>
      <button type="submit">Añadir peso</button>
    </form>
  );
};