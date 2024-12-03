import React from 'react';
import { FormularioPeso } from './components/FormularioPeso';
import { GraficoPeso } from './components/GraficoPeso';
import { ThemeToggle } from './components/ThemeToggle';
import { useDatosPeso } from './hooks/useDatosPeso';
import { useTheme } from './hooks/useTheme';
import './style.css';

const App = () => {
  const { datosPeso, agregarRegistro } = useDatosPeso();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="app">
      <div className="header">
        <h1>Seguimiento de peso</h1>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>
      <FormularioPeso alEnviar={agregarRegistro} />
      <GraficoPeso datos={datosPeso} />
    </div>
  );
};

export default App;