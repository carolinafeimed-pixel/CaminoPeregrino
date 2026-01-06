
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative text-white">
      {/* Imagen de fondo del Camino de Santiago */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/camino/1920/1080')" }}
      ></div>
      <div className="absolute inset-0 bg-azul bg-opacity-70"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          CAMINO PEREGRINO
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto leading-8 text-white/95 drop-shadow-md">
          El Camino de Santiago, hecho a tu medida
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-amarillo hover:bg-yellow-400 text-azul font-bold py-4 px-8 rounded-lg shadow-xl text-lg transition duration-300 transform hover:scale-105"
          >
            Diseña tu Camino a tu medida
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
