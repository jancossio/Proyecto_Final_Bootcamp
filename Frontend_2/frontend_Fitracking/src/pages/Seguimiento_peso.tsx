import React from 'react';
import { WeightForm } from '../components/WeightForm';
import { WeightChart } from '../components/WeightChart';
import { useWeightData } from '../hooks/useWeightData';
import { ThemeToggle } from '../components/ThemeToggle';
import { useTheme } from '../hooks/useTheme';

import '../styles/Seguimiento_peso.css';
import '../styles/theme.css';

const Seguimiento_peso = () => {
  const { weightData, addEntry } = useWeightData();
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <main id="seguimiento-peso-page">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <h1 className='h1-weight-track'>Seguimiento de peso</h1>
      <WeightForm onSubmit={addEntry} />
      <WeightChart data={weightData} />
    </main>
  );
};

export default Seguimiento_peso;