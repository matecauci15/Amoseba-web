// import React from 'react';
// import { motion } from 'framer-motion';

// export const About: React.FC = () => {
//   return (
//     <div className="p-6 bg-white rounded shadow-md m-4 max-w-4xl mx-auto text-center">
//       <h1 className="text-3xl font-bold mb-4 text-blue-900">Sobre Nosotros</h1>
//       <motion.p
//         className="text-gray-700"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         Fundada en 2004, AMOESYECBA busca mejorar la calidad de vida de sus socios
//         ofreciendo servicios y beneficios de excelencia. Nuestra misión es brindar
//         apoyo integral a los trabajadores y empleados de la salud y educación,
//         promoviendo su bienestar y desarrollo personal.
//       </motion.p>
//       <motion.p
//         className="text-gray-700 mt-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
//       >
//         AMOESYECBA nació en Buenos Aires, con el objetivo de construir una mutual
//         solidaria que brinde asistencia en préstamos, salud, recreación y bienestar.
//         A lo largo de los años, hemos crecido expandiendo nuestra oferta de servicios
//         y beneficiando a miles de trabajadores.
//       </motion.p>
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <img src="/images/mutual.jpg" alt="Mutual" className="rounded-lg shadow-md w-full" />
//         <img src="/images/prestamos.jpg" alt="Préstamos" className="rounded-lg shadow-md w-full" />
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen rounded-lg shadow-lg flex flex-col justify-center items-center bg-gray-100 px-6 md:px-12 py-16 mt-10 max-w-5xl mx-auto text-center mb-10">
      <div className="max-w-4xl w-full grid md:grid-cols-1 gap-1 items-center">
        {/* Contenido de texto */}
        <div>
          <h2 className="text-4xl font-bold text-[#A39F73] mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            La <strong>Asociación Mutual Obreros, Empleados de la Salud y Educación de la Ciudad de Buenos Aires (AMOESYECBA)</strong> fue fundada en 2004 con un propósito claro: mejorar continuamente la calidad de vida de sus socios. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Nuestro compromiso es brindar <strong>atención cálida</strong>, ágil y eficaz, con un amplio abanico de servicios y beneficios de alta calidad.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Fusionamos <strong>eficiencia e innovación</strong> para ofrecer soluciones en turismo, recreación, crédito y salud, promoviendo valores de <strong>asociativismo y solidaridad</strong>.
          </p>
        </div>

        {/* Carrusel de imágenes */}
        <div className="flex justify-center items-center w-full mt-10">
  <div className="relative w-full max-w-3xl h-60 md:h-80 overflow-hidden rounded-lg shadow-lg flex justify-center items-center">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Imagen ${index + 1}`}
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          index === currentImage ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* Botones (puntitos) para cambiar imágenes */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentImage ? "bg-black" : "bg-gray-300"
          } transition-colors duration-300`}
        />
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
};