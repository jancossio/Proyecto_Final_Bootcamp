import React from 'react';
import { Line } from 'react-chartjs-2';

const SeguimientoPeso = () => {
  const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Peso (kg)',
        data: [70, 69, 68.5, 68, 67.8, 67.5, 67],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Seguimiento de Peso Semanal',
      },
    },
  };

  return (
    <div>
      <h1>Seguimiento de Peso</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default SeguimientoPeso;
