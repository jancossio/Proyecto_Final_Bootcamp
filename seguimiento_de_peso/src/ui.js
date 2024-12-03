export function createWeightForm() {
  const form = document.createElement('form');
  form.className = 'weight-form';
  
  form.innerHTML = `
    <div class="input-group">
      <label for="weight">Weight (kg):</label>
      <input type="number" id="weight" step="0.1" required>
    </div>
    <button type="submit">Add Weight</button>
  `;
  
  return form;
}