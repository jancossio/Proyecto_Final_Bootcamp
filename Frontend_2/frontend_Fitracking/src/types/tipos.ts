export interface DatosNutrientes {
    nombre: string;
    porcentaje: number;
    color: string;
  }
  
  export type MapaPorcentajes = Record<string, number>;
  
  export interface PropiedadesGrafico {
    datos: MapaPorcentajes;
  }
  
  export interface PropiedadesControl {
    nombre: string;
    valor: number;
    alCambiar: (valor: number) => void;
  }
  
  export interface Receta {
    nombre: string;
    descripcion: string;
    ingredientes: string[];
    instrucciones: string[];
    distribucionNutrientes: MapaPorcentajes;
    tiempoPreparacion: string;
    calorias: number;
    imagen?: string;
  }
  
  export interface UserRoutineExerciseInfo {
    id: number;
    userId: number;
    day: RoutineDayWeekInfo;
    exercise: ExerciseInfo | null;
    focus: string;
    completed: boolean;
  }
  
  export interface RoutineDayWeekInfo {
    id: number;
    name: string;
  }
  
  export interface ExerciseInfo {
    id: number;
    name: string;
    description: string;
    repetitions: string;
    duration: number;
    rest: number;
    difficulty: string;
    category: string;
    image: string;
  }
  
  
  

  export interface PropiedadesDieta {
    porcentajes: MapaPorcentajes;
  }