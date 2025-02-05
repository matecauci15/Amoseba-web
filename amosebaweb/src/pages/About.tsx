import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md m-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Sobre Nosotros</h1>
      <motion.p
        className="text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Fundada en 2004, AMOESYECBA busca mejorar la calidad de vida de sus socios
        ofreciendo servicios y beneficios de excelencia. Nuestra misión es brindar
        apoyo integral a los trabajadores y empleados de la salud y educación,
        promoviendo su bienestar y desarrollo personal.
      </motion.p>
      <motion.p
        className="text-gray-700 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        AMOESYECBA nació en Buenos Aires, con el objetivo de construir una mutual
        solidaria que brinde asistencia en préstamos, salud, recreación y bienestar.
        A lo largo de los años, hemos crecido expandiendo nuestra oferta de servicios
        y beneficiando a miles de trabajadores.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/images/mutual.jpg" alt="Mutual" className="rounded-lg shadow-md w-full" />
        <img src="/images/prestamos.jpg" alt="Préstamos" className="rounded-lg shadow-md w-full" />
      </div>
    </div>
  );
};