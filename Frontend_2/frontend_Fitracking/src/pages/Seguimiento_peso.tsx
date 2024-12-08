import React from 'react';
import { WeightForm } from '../components/WeightForm';
import { WeightChart } from '../components/WeightChart';
import { useWeightData } from '../hooks/useWeightData';
import '../styles/Seguimiento_peso.css';

const Seguimiento_peso = () => {
    const { weightData, addEntry } = useWeightData();
  
    return (
      <main id="seguimiento-peso-page">
        <h1 className='h1-weight-track'>Weight Tracker</h1>
        <WeightForm onSubmit={addEntry} />
        <WeightChart data={weightData} />
      </main>
    );
  };
  
  export default Seguimiento_peso;