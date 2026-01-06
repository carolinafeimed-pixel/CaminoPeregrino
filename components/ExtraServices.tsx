
import React from 'react';

const ServiceIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg className="h-8 w-8 text-amarillo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const extras = [
    { title: "Traslado al punto de inicio", iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
    { title: "Masajes y Spa en Santiago", iconPath: "M14.121 15.879l-2.121 2.121-2.121-2.121M12 18V9.879a2.121 2.121 0 012.121-2.121h0a2.121 2.121 0 012.121 2.121V18M9.879 9.879a2.121 2.121 0 00-2.121-2.121h0a2.121 2.121 0 00-2.121 2.121V18" },
    { title: "Degustación de vinos y quesos", iconPath: "M14 10h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1z M4 7h16" },
    { title: "Alquiler de bicicletas", iconPath: "M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Guía acompañante", iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1h-3" },
    { title: "Extensión del viaje", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
];

const ExtraServices: React.FC = () => {
    return (
        <section id="extra-services" className="py-20 sm:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-azul sm:text-4xl">
                        Personaliza aún más tu experiencia
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                        Añade servicios exclusivos para hacer tu Camino todavía más especial.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {extras.map(extra => (
                        <div key={extra.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="flex justify-center items-center">
                                <ServiceIcon path={extra.iconPath} />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-azul">{extra.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExtraServices;
