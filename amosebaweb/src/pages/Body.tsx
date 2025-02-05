import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

// Definir la estructura de una imagen con información adicional
interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

// API KEY de Pexels (reemplázala con la tuya)
const API_KEY = 'QIhtXGr915iqHxwSC1v6i5xj1iiLMQ5dIgHnTvc3Mn28MlKTqLoewcLr';  
const SEARCH_TERM = 'people'; // Puedes cambiarlo según el contenido deseado

export const Body: React.FC = () => {
  const [content, setContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get<{ photos: { id: number; src: { medium: string } }[] }>(
          `https://api.pexels.com/v1/search?query=${SEARCH_TERM}&per_page=5`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        // Convertimos los datos en un formato adecuado
        const formattedData: ContentItem[] = response.data.photos.map((photo, index) => ({
          id: photo.id,
          title: `Beneficio ${index + 1}`, // Puedes modificar esto según lo necesites
          description: `Descripción detallada del beneficio ${index + 1}. Aquí puedes explicar cómo ayuda este beneficio a los afiliados.`,
          image: photo.src.medium,
          buttonText: 'Más información',
          buttonLink: '#',
        }));

        setContent(formattedData);
      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Explora Nuestros Beneficios</h2>
      
      <div className="space-y-16">
        {content.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Imagen */}
            <img src={item.image} alt={item.title} className="w-full md:w-1/2 rounded-lg object-cover shadow-md" />

            {/* Texto y botón */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-700 my-4">{item.description}</p>
              <a
                href={item.buttonLink}
                className="inline-block bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-300"
              >
                {item.buttonText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
