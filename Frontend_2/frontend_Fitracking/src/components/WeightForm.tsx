import React, { useState } from 'react';
import {ThemeToggle} from '../components/ThemeToggle'
interface WeightFormProps {
  onSubmit: (weight: number) => void;
}
export const UseTheme: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div>
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </div>
  );
};
export const WeightForm: React.FC<WeightFormProps> = ({ onSubmit }) => {
  const [weight, setWeight] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weightValue = parseFloat(weight);
    if (!isNaN(weightValue)) {
      onSubmit(weightValue);
      setWeight('');
    }
  };

  return (
    <form className="weight-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="weight">Peso (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          step="0.1"
          required
        />
      </div>
      <button type="submit">Añadir peso</button>
    </form>
  );
};