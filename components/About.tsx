
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-azul sm:text-4xl">
            Un Camino único, como tú
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Somos especialistas en crear experiencias personalizadas en el Camino de Santiago. Nos diferenciamos por nuestra atención cercana y humana, nuestra profunda experiencia local y un enfoque en servicios exclusivos y de lujo. Olvídate de la logística y las preocupaciones; con nosotros vivirás un Camino inolvidable, con sentido y comodidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
