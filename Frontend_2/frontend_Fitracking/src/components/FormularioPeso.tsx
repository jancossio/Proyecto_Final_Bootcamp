import React, { useState } from 'react';

interface FormularioPesoProps {
  alEnviar: (peso: number) => void;
}

export const FormularioPeso: React.FC<FormularioPesoProps> = ({ alEnviar }) => {
  const [peso, setPeso] = useState<string>('');

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valorPeso = parseFloat(peso);
    if (!isNaN(valorPeso)) {
      alEnviar(valorPeso);
      setPeso('');
    }
  };

  return (
    <form className="weight-form" onSubmit={manejarEnvio}>
      <div className="input-group">
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          step="0.1"
          required
          placeholder="Ingrese su peso"
        />
      </div>
      <button type="submit">Agregar peso</button>
    </form>
  );
};
