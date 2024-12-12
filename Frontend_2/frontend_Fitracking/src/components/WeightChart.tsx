import React from 'react';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { DatosPeso } from '../types/weight';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraficoPesoProps {
  datos: DatosPeso;
}

export const GraficoPeso: React.FC<GraficoPesoProps> = ({ datos }) => {
  const datosGrafico = {
    labels: datos.registros.map(registro => 
      format(registro.fecha, 'MMMM yyyy', { locale: es })
    ),
    datasets: [
      {
        label: 'Peso en el tiempo',
        data: datos.registros.map(registro => registro.peso),
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#22c55e',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const opciones = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Peso (kg)',
          color: '#22c55e',
        },
        grid: {
          color: 'rgba(34, 197, 94, 0.1)',
        },
        ticks: {
          color: '#22c55e',
        }
      },
      x: {
        title: {
          display: true,
          text: 'Fecha',
          color: '#22c55e',
        },
        grid: {
          color: 'rgba(34, 197, 94, 0.1)',
        },
        ticks: {
          color: '#22c55e',
        }
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#22c55e',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={datosGrafico} options={opciones} />
    </div>
  );
};