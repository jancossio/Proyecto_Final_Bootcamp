import { Quote } from 'lucide-react';
import { type Testimonial } from '../datos/testimonials';

export default function TestimonialCard({
  name,
  age,
  image,
  location,
  achievement,
  testimonial,
}: Testimonial) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg text-green-800">{name}</h3>
          <p className="text-green-600 text-sm">
            {age} años · {location}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
          <Quote className="h-5 w-5" />
          Logro:
        </div>
        <p className="text-green-800">{achievement}</p>
      </div>
      <p className="text-gray-600 italic">&quot;{testimonial}&quot;</p>
    </div>
  );
}