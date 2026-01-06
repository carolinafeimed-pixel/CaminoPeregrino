
import React from 'react';

const CheckIcon: React.FC = () => (
  <svg className="h-6 w-6 text-amarillo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const ServiceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 pt-1">
      <CheckIcon />
    </div>
    <span className="ml-3 text-base md:text-lg text-gray-700">{children}</span>
  </li>
);

const IncludedServices: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-azul sm:text-4xl">
              Viaja sin preocupaciones
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
              Nos ocupamos de cada detalle para que tu única misión sea caminar y disfrutar. Esto es lo que incluimos siempre:
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            <ServiceItem>Alojamientos con encanto (casas rurales y hoteles) con baño privado.</ServiceItem>
            <ServiceItem>Desayunos completos para empezar el día con energía.</ServiceItem>
            <ServiceItem>Transporte de equipaje entre etapas.</ServiceItem>
            <ServiceItem>Kit de bienvenida con credencial del peregrino.</ServiceItem>
            <ServiceItem>Itinerario completo y detallado de la ruta.</ServiceItem>
            <ServiceItem>Recomendaciones gastronómicas y de puntos de interés.</ServiceItem>
            <ServiceItem>Asistencia 24h vía WhatsApp para lo que necesites.</ServiceItem>
            <ServiceItem>Vehículo de apoyo en caso de emergencia.</ServiceItem>
            <ServiceItem>Cancelación gratuita hasta 15 días antes del inicio.</ServiceItem>
        </div>
      </div>
    </section>
  );
};

export default IncludedServices;
