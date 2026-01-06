
import React from 'react';

const CustomTrips: React.FC = () => {
  return (
    <section id="custom-trips" className="bg-azul text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Viajes a tu medida, para todos
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100/90">
            El Camino es una experiencia personal. Por eso, adaptamos cada detalle a tus necesidades y deseos, ya viajes en pareja, en familia, con amigos o en solitario.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-amarillo">Ritmo y Etapas</h3>
              <p className="mt-2 text-white/80">Define la distancia diaria que quieres caminar. Podemos acortar o alargar las etapas según tu nivel físico y el tiempo del que dispongas.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-amarillo">Alojamientos</h3>
              <p className="mt-2 text-white/80">Elige entre una cuidada selección de hoteles con encanto, casas rurales, pazos o paradores. Priorizamos la comodidad y la autenticidad.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-amarillo">Servicios Extra</h3>
              <p className="mt-2 text-white/80">¿Necesitas traslados, un guía privado, visitas culturales o experiencias gastronómicas? Añadimos lo que necesites para enriquecer tu viaje.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-amarillo">Flexibilidad Total</h3>
              <p className="mt-2 text-white/80">Tu tranquilidad es lo más importante. Ofrecemos flexibilidad en las fechas y te ayudamos a gestionar cualquier cambio en tus planes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTrips;
