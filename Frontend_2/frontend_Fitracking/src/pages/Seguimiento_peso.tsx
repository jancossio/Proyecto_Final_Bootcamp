import React from 'react';
import { WeightForm } from '../components/WeightForm';
import { WeightChart } from '../components/WeightChart';
import { useWeightData } from '../hooks/useWeightData';
import '../styles/Seguimiento_peso.css';

const Seguimiento_peso = () => {
    const { weightData, addEntry } = useWeightData();
  
    return (
      <div className="app">
        <h1>Weight Tracker</h1>
        <WeightForm onSubmit={addEntry} />
        <WeightChart data={weightData} />
      </div>
    );
  };
  
  export default Seguimiento_peso;