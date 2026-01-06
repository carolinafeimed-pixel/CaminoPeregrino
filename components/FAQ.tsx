
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-azul"
        aria-expanded={isOpen}
      >
        <span className="pr-2">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="text-gray-600">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const faqs = [
    {
      question: '¿Cómo funciona la reserva?',
      answer: 'La reserva se confirma con un pago inicial del 20% del importe total. El 80% restante se abona 30 días antes de la fecha de inicio del viaje, para que puedas planificar con tranquilidad.'
    },
    {
      question: '¿Cuándo es la mejor época para hacer el Camino?',
      answer: 'Las mejores fechas suelen ser entre mayo y septiembre. Personalmente, recomendamos mayo, junio y septiembre por el clima agradable y porque hay menos aglomeraciones, permitiendo una experiencia más íntima.'
    },
    {
      question: '¿Qué incluye el precio?',
      answer: 'El presupuesto es totalmente personalizado. No tenemos paquetes cerrados. El precio final depende de los servicios que tú elijas incluir en tu experiencia, dándote control total sobre tu viaje y tu presupuesto.'
    },
    {
      question: '¿Cuál es la política de cancelación?',
      answer: 'Ofrecemos cancelación gratuita hasta 15 días antes del inicio de tu viaje. Queremos que reserves con total confianza, sabiendo que tienes flexibilidad ante cualquier imprevisto.'
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-azul sm:text-4xl">
                Información Práctica
            </h2>
             <p className="mt-4 text-lg text-gray-600">Resolvemos tus dudas más importantes.</p>
        </div>
        <div className="mt-12">
            {faqs.map((faq, index) => (
                <FAQItem 
                  key={index} 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
