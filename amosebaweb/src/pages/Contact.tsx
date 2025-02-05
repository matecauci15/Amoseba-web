import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md m-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Contacto</h1>
      {submitted ? (
        <p className="text-green-500">¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.</p>
      ) : (
        <form className="space-y-4 bg-gray-100 p-4 rounded shadow-md" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold text-blue-900 mb-1">Nombre:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-blue-900 mb-1">Correo Electrónico:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-blue-900 mb-1">Mensaje:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Enviar
          </button>
        </form>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900">Nuestra Ubicación</h2>
        <iframe
          title="Ubicación de la oficina"
          className="w-full h-64 rounded mt-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6372.304347779653!2d-58.37994475468674!3d-34.606196475245596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad27b20837b%3A0x650f852d59480657!2sFlorida%20165%2C%20C1005AAC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738162703744!5m2!1ses-419!2sar"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
