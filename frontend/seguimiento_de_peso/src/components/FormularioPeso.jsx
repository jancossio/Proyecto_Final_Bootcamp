import React, { useState } from 'react';

export const FormularioPeso = ({ alEnviar }) => {
  const [peso, setPeso] = useState('');

  const manejarEnvio = (e) => {
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