
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const testimonials = [
  { 
    quote: "Trato cercano, hospedajes con encanto y desayunos completos.", 
    author: "De Manuel D",
    source: "Tripadvisor",
    rating: 5,
    title: "Muy buen trato. Repetiría"
  },
  { 
    quote: "Mi experiencia con Camino Peregrino ha sido inmejorable.", 
    author: "De Juan Enrique",
    source: "Tripadvisor",
    rating: 5,
    title: "La mejor experiencia."
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-azul">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                La experiencia de nuestros peregrinos
            </h2>
            <p className="mt-4 text-lg text-amarillo font-semibold">Valoraciones de Tripadvisor</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="text-amarillo" />)}
              </div>
              <h3 className="text-xl font-bold text-azul mt-2">{testimonial.title}</h3>
              <blockquote className="text-gray-700 italic mt-4 flex-grow">
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <footer className="mt-4">
                <p className="font-semibold text-azul">— {testimonial.author}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
