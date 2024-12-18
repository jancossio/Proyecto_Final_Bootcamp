export interface HealthFormData {
  nombre: string;
  edad: number;
  peso: number;
  altura: number;
  nivelActividad: string;
  consumoAgua: number;
  horasSueno: number;
  nivelEstres: number;
  alergias: string;
  preferenciasDieta: string[];
  condicionesMedicas: string[];
  objetivos: string[];
  presionArterial: {
    sistolica: number;
    diastolica: number;
  };
}

export interface Recomendacion {
  tipo: 'exito' | 'advertencia' | 'info' | 'error';
  mensaje: string;
  categoria: 'estilo-vida' | 'nutricion' | 'medico' | 'ejercicio' | 'mental';
}