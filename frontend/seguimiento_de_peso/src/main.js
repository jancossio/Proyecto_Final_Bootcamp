import './style.css';
import { WeightTracker } from './weightData.js';
import { createWeightChart } from './chart.js';
import { createWeightForm } from './ui.js';

const weightTracker = new WeightTracker();
let chart = null;

function initializeApp() {
  const formContainer = document.getElementById('form-container');
  const form = createWeightForm();
  formContainer.appendChild(form);

  const chartContext = document.getElementById('weightChart');
  chart = createWeightChart(chartContext, weightTracker);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weightInput = document.getElementById('weight');
    const weight = parseFloat(weightInput.value);
    
    weightTracker.addEntry(weight);
    updateChart();
    
    weightInput.value = '';
  });
}

function updateChart() {
  const entries = weightTracker.getEntries();
  
  chart.data.labels = entries.map(entry => entry.date.toLocaleDateString());
  chart.data.datasets[0].data = entries.map(entry => entry.weight);
  chart.update();
}

// Add some sample data
weightTracker.addEntry(70.5);
weightTracker.addEntry(70.2);
weightTracker.addEntry(69.8);

initializeApp();