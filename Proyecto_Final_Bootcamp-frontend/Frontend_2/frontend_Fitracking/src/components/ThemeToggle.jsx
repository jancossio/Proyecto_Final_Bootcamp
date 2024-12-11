import React from 'react';

export const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="theme-toggle"
      aria-label="Cambiar tema"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};