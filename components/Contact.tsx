
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-azul sm:text-4xl">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Cuéntanos tu idea y empecemos a diseñar juntos una experiencia inolvidable. Rellena el formulario o contáctanos directamente.
          </p>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amarillo focus:border-amarillo" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amarillo focus:border-amarillo" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">¿Cómo imaginas tu Camino?</label>
              <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amarillo focus:border-amarillo"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full md:w-auto bg-amarillo hover:bg-yellow-400 text-azul font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition duration-300">
                Diseña tu Camino a tu medida
              </button>
            </div>
          </form>
          <div className="mt-8 text-center text-gray-600">
              <p>Si lo prefieres, también puedes contactarnos por:</p>
              <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2">
                <a href="mailto:caminoperegrinoo@gmail.com" className="font-medium text-azul hover:text-yellow-500">caminoperegrinoo@gmail.com</a>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a href="https://wa.me/34609902005" target="_blank" rel="noopener noreferrer" className="font-medium text-azul hover:text-yellow-500">WhatsApp: +34 609 902 005</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
