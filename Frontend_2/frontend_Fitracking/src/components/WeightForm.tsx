import React, { useState } from 'react';

interface FormularioPesoProps {
  onSubmit: (peso: number) => void;
}

export const FormularioPeso: React.FC<FormularioPesoProps> = ({ onSubmit }) => {
  const [peso, setPeso] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valorPeso = parseFloat(peso);
    if (!isNaN(valorPeso) && valorPeso > 0) {
      onSubmit(valorPeso);
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
      <button type="submit">Añadir peso</button>
    </form>
  );
};