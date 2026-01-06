
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-azul">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-white">
          El Camino te espera.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-blue-100/90">
          Más que un viaje, el Camino es una experiencia personal de descubrimiento, superación y calma. ¿Empezamos?
        </p>
        <div className="mt-8">
            <a
                href="#contact"
                className="inline-block bg-amarillo hover:bg-yellow-400 text-azul font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition duration-300 transform hover:scale-105"
            >
                Empezar a diseñar mi Camino
            </a>
        </div>
         <div className="mt-12 border-t border-blue-800 pt-8">
            <p className="text-base text-blue-300">&copy; {new Date().getFullYear()} Camino Peregrino. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
