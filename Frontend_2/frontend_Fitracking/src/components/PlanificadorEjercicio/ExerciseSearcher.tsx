import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import useAddExerciseToRoutine from '../../hooks/useAddExerciseToRoutine';
import { ExerciseInfo } from '../../types/tipos';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExercise: (exercise: ExerciseInfo) => void;
  selectedDay: number;
  dayGoal: string;
  userId: number;
}

const ExerciseSearcher: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectExercise,
  selectedDay,
  dayGoal,
  userId,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredExercises, setFilteredExercises] = useState<ExerciseInfo[]>([]);
  const [allExercises, setAllExercises] = useState<ExerciseInfo[]>([]);

  const { addExercise, loading, error } = useAddExerciseToRoutine({
    userId,
    selectedDay,
    dayGoal,
  });

  const difficulties = ['Principiante', 'Intermedio', 'Avanzado'];
  const categories = [
    'Pecho',
    'Piernas',
    'Espalda',
    'Torso',
    'Hombros',
    'Cardio',
    'Brazos',
  ];

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('http://localhost:8080/ejercicios/search');
        if (!response.ok) throw new Error('Failed to fetch exercises');
        const exercises: ExerciseInfo[] = await response.json();
        setAllExercises(exercises);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };
    fetchExercises();
  }, []);

  useEffect(() => {
    const filtered = allExercises.filter((exercise) => {
      const matchesSearch = exercise.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDifficulty =
        !selectedDifficulty || exercise.difficulty === selectedDifficulty;
      const matchesCategory =
        !selectedCategory || exercise.category === selectedCategory;
      return matchesSearch && matchesDifficulty && matchesCategory;
    });
    setFilteredExercises(filtered);
  }, [searchTerm, selectedDifficulty, selectedCategory, allExercises]);

  const handleExerciseClick = async (exercise: ExerciseInfo) => {
    console.log(exercise);
    await addExercise(exercise); // Use the custom hook
    onSelectExercise(exercise); // Notify parent component
    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Agregar Ejercicios</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          {/* Search and Filters */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Dificultades</option>
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Categorías</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Results */}
          <div className="overflow-y-auto max-h-[60vh]">
            {filteredExercises.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No hay ejercicios con estas caracteristicas.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredExercises.map((exercise, index) => (
                  <div
                    key={index}
                    onClick={() => handleExerciseClick(exercise)} // Add onClick to handle adding exercise
                    className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{exercise.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {exercise.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exercise.difficulty === 'Principiante'
                              ? 'bg-green-100 text-green-800'
                              : exercise.difficulty === 'Intermedio'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {exercise.difficulty}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-800">
                          {exercise.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Loading and Error Message */}
        {loading && <div className="text-center p-4">Agregando ejercicios...</div>}
        {error && <div className="text-center text-red-500 p-4">{error}</div>}
      </div>
    </div>
  );
};

export default ExerciseSearcher;
