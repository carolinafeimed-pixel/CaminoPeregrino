
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amarillo text-azul font-bold text-xl">
        {number}
      </div>
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-azul">{title}</h3>
      <p className="mt-2 text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-yellow-500 uppercase">Así de sencillo</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-azul sm:text-4xl">
            Preparamos tu viaje en 3 pasos
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Step 
              number="1" 
              title="Cuéntanos cómo imaginas tu Camino" 
              description="Contacta con nosotros y comparte tus ideas: qué ruta te atrae, cuántos días tienes, tu ritmo deseado y qué tipo de experiencia buscas." 
            />
            <Step 
              number="2" 
              title="Diseñamos tu itinerario a medida" 
              description="Con tus ideas, creamos una propuesta detallada y personalizada. La ajustaremos contigo hasta que sea perfecta para ti." 
            />
            <Step 
              number="3" 
              title="Disfruta del Camino sin preocupaciones" 
              description="Nosotros nos encargamos de todo: alojamientos, transporte de equipaje y asistencia. Tú solo camina y vive la experiencia." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
