
import React from 'react';

const routes = [
  { name: 'Camino Francés', description: 'La ruta más icónica y social, llena de historia, servicios y peregrinos de todo el mundo.' },
  { name: 'Camino Portugués', description: 'Un recorrido precioso desde Portugal, con su famosa variante por el interior.' },
  { name: 'Camino Portugués por la costa', description: 'Siente la brisa del Atlántico en esta espectacular alternativa costera del Camino Portugués.' },
  { name: 'Camino Primitivo', description: 'El primer Camino, un desafío a través de las montañas de Asturias para los más aventureros.' },
  { name: 'Finisterre y Muxía', description: 'El epílogo del Camino, un viaje místico hasta el "fin del mundo" y la Costa da Morte.' },
];

const RouteCard: React.FC<{ name: string; description: string; imageUrl: string }> = ({ name, description, imageUrl }) => (
  <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    {/* Comentario: Aquí iría una imagen representativa de la ruta */}
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
    </div>
  </div>
);


const Routes: React.FC = () => {
  return (
    <section id="routes" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-azul sm:text-4xl">
            Explora las Rutas del Camino
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Cada ruta ofrece una experiencia diferente. Te ayudamos a elegir y adaptar la que mejor se ajuste a ti.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {routes.map((route, index) => (
                <RouteCard key={route.name} {...route} imageUrl={`https://picsum.photos/seed/route${index}/400/300`} />
            ))}
             <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-azul flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-bold text-white">Y muchas más...</h3>
                <p className="mt-2 text-sm text-white/90">Vía de la Plata, Camino del Norte... Diseñamos cualquier ruta del Camino de Santiago para ti.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Routes;
