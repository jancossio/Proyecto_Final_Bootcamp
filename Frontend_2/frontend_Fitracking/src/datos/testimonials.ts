export interface Testimonial {
    id: number;
    name: string;
    age: number;
    location: string;
    image: string;
    achievement: string;
    testimonial: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ana García',
      age: 28,
      location: 'Madrid',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
      achievement: 'Perdió 15kg en 6 meses y completó su primera maratón',
      testimonial: 'FitTracking cambió completamente mi relación con el ejercicio. La aplicación me ayudó a mantenerme motivada y a establecer metas realistas.',
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      age: 35,
      location: 'Barcelona',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
      achievement: 'Aumentó su masa muscular en un 20% y mejoró su postura',
      testimonial: 'Gracias a FitTracking, pude transformar mi cuerpo y mi salud. El seguimiento personalizado fue clave para mi éxito.',
    },
    {
      id: 3,
      name: 'María Sánchez',
      age: 42,
      location: 'Valencia',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
      achievement: 'Recuperó su forma física después del embarazo',
      testimonial: 'La flexibilidad del programa y el soporte constante me permitieron alcanzar mis objetivos sin descuidar a mi familia.',
    },
    {
      id: 4,
      name: 'David López',
      age: 31,
      location: 'Sevilla',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
      achievement: 'Superó su lesión de rodilla y volvió a jugar fútbol',
      testimonial: 'El programa de rehabilitación de FitTracking fue fundamental para mi recuperación. Ahora estoy más fuerte que nunca.',
    },
    {
      id: 5,
      name: 'Laura Martínez',
      age: 45,
      location: 'Bilbao',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
      achievement: 'Mejoró su resistencia y energía diaria',
      testimonial: 'A mis 45 años, me siento con más energía que cuando tenía 30. FitTracking me enseñó que nunca es tarde para cuidarse.',
    },
    {
      id: 6,
      name: 'Javier Ruiz',
      age: 29,
      location: 'Málaga',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200',
      achievement: 'Ganó su primera competencia de CrossFit',
      testimonial: 'El seguimiento detallado de mis entrenamientos me ayudó a optimizar mi rendimiento y alcanzar nuevos niveles.',
    },
  ];