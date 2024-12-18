export const ROUTINES = [
    {
      day: "Monday",
      goal: "Upper Body Strength",
      exercises: [
        {
          nombre: "Push-Ups",
          descripcion: "A basic upper body strength exercise that works the chest, shoulders, and triceps.",
          repeticiones: "3 sets of 12 reps",
          duracion: 30,
          descanso: 20,
          dificultad: "Beginner",
          categoria: "Upper Body",
          completado: false,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
        {
          nombre: "Pull-Ups",
          descripcion: "An advanced bodyweight exercise targeting the back, shoulders, and arms.",
          repeticiones: "3 sets of 8 reps",
          duracion: 40,
          descanso: 30,
          dificultad: "Intermediate",
          categoria: "Upper Body",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
      ],
    },
    {
      day: "Martes",
      goal: "Cardio & Endurance",
      exercises: [
        {
          nombre: "Jumping Jacks",
          descripcion: "A full-body cardio exercise to increase heart rate and stamina.",
          repeticiones: "3 sets of 50 reps",
          duracion: 60,
          descanso: 20,
          dificultad: "Beginner",
          categoria: "Cardio",
          completado: false,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
        {
          nombre: "Mountain Climbers",
          descripcion: "An effective cardio move that also strengthens the core and legs.",
          repeticiones: "3 sets of 30 seconds",
          duracion: 30,
          descanso: 20,
          dificultad: "Intermediate",
          categoria: "Cardio",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
      ],
    },
    {
      day: "Miercoles",
      goal: "Lower Body Strength",
      exercises: [
        {
          nombre: "Squats",
          descripcion: "A fundamental exercise for strengthening the legs and glutes.",
          repeticiones: "3 sets of 15 reps",
          duracion: 30,
          descanso: 30,
          dificultad: "Beginner",
          categoria: "Lower Body",
          completado: false,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
        {
          nombre: "Lunges",
          descripcion: "A great exercise for building leg strength and improving balance.",
          repeticiones: "3 sets of 12 reps (each leg)",
          duracion: 45,
          descanso: 30,
          dificultad: "Intermediate",
          categoria: "Lower Body",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
      ],
    },
    {
      day: "Jueves",
      goal: "Core Strength",
      exercises: [
        {
          nombre: "Plank",
          descripcion: "A core-strengthening exercise that engages multiple muscle groups.",
          repeticiones: "Hold for 30 seconds",
          duracion: 30,
          descanso: 30,
          dificultad: "Beginner",
          categoria: "Core",
          completado: false,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
        {
          nombre: "Bicycle Crunches",
          descripcion: "An exercise targeting the abs and obliques for a strong core.",
          repeticiones: "3 sets of 20 reps",
          duracion: 40,
          descanso: 20,
          dificultad: "Intermediate",
          categoria: "Core",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
      ],
    },
    {
      day: "Viernes",
      goal: "Full Body Conditioning",
      exercises: [
        {
          nombre: "Burpees",
          descripcion: "A high-intensity full-body exercise to improve strength and endurance.",
          repeticiones: "3 sets of 12 reps",
          duracion: 60,
          descanso: 30,
          dificultad: "Intermediate",
          categoria: "Full Body",
          completado: false,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
        {
          nombre: "Kettlebell Swings",
          descripcion: "A dynamic exercise for developing power and improving cardiovascular fitness.",
          repeticiones: "3 sets of 15 reps",
          duracion: 45,
          descanso: 20,
          dificultad: "Advanced",
          categoria: "Full Body",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
      ],
    },
    {
      day: "Sabado",
      goal: "HIIT (High-Intensity Interval Training)",
      exercises: [
        {
          nombre: "Jump Squats",
          descripcion: "A plyometric exercise to build explosive leg strength and cardio fitness.",
          repeticiones: "3 sets of 15 reps",
          duracion: 45,
          descanso: 20,
          dificultad: "Intermediate",
          categoria: "HIIT",
          completado: false,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
        {
          nombre: "High Knees",
          descripcion: "A fast-paced exercise to improve cardiovascular endurance and agility.",
          repeticiones: "3 sets of 30 seconds",
          duracion: 30,
          descanso: 15,
          dificultad: "Beginner",
          categoria: "HIIT",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
      ],
    },
    {
      day: "Domingo",
      goal: "Rest & Recovery",
      exercises: [
        {
          nombre: "Foam Rolling",
          descripcion: "A recovery technique to relieve muscle tension and improve mobility.",
          repeticiones: "5 minutes on major muscle groups",
          duracion: 300,
          descanso: 0,
          dificultad: "Beginner",
          categoria: "Recovery",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
        {
          nombre: "Yoga Poses",
          descripcion: "Gentle stretches to relax the body and mind.",
          repeticiones: "10 minutes of gentle flow",
          duracion: 600,
          descanso: 0,
          dificultad: "Beginner",
          categoria: "Recovery",
          completado: true,
          imagen: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&h=300&fit=crop'
        },
      ],
    },
  ];