import React from 'react';
import { WeightForm } from '../components/WeightForm';
import { WeightChart } from '../components/WeightChart';
import { useWeightData } from '../hooks/useWeightData';
import {ThemeToggle} from '../components/ThemeToggle';

import '../styles/Seguimiento_peso.css';

const Seguimiento_peso = () => {
    const { weightData, addEntry } = useWeightData();
  
    return (
      <main id="seguimiento-peso-page">
        <ThemeToggle isDark={false} onToggle={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <h1 className='h1-weight-track'>Seguimiento de peso</h1>
        <WeightForm onSubmit={addEntry} />
        <WeightChart data={weightData} />
      </main>
    );
  };
  
  export default Seguimiento_peso;