import React from 'react';
import { FormularioPeso } from '../components/WeightForm';
import { GraficoPeso } from '../components/WeightChart';
import { useDatosPeso } from '../hooks/useDatosPeso';
import { ThemeToggle } from '../components/ThemeToggle';
import { useTheme } from '../hooks/useTheme';

import '../styles/Seguimiento_peso.css';
import '../styles/theme.css';

const SeguimientoPeso = () => {
  const { datosPeso, agregarRegistro, reinicializarDatos } = useDatosPeso();
  const { isDark, toggleTheme } = useTheme();

  return (
    <main id="seguimiento-peso-page">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <h1 className='h1-weight-track'>Seguimiento de peso</h1>
      <FormularioPeso
        onSubmit={(peso, fecha) => agregarRegistro(peso, fecha)}
      />
      <GraficoPeso datos={datosPeso} />
      <button
        onClick={reinicializarDatos}
        className="reset-button"
      >
        Reinicializar Gráfica
      </button>
    </main>
  );
};

export default SeguimientoPeso;