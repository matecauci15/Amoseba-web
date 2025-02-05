// import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Plane, Home, ShieldCheck, Heart, Gavel } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      title: 'ÓPTICA',
      description: 'La Mutual entrega sin cargo 2 pares de anteojos recetados por año calendario.',
      icon: <Eye size={40} className="text-blue-900" />, 
    },
    {
      title: 'SERVICIO DE ASISTENCIA AL VIAJERO REGIONAL',
      description:
        'Los Servicios de Asistencia al Viajero se prestan en viaje la salida del beneficiario hacia cualquier destino dentro del territorio argentino situado a más de 100 kms. de su domicilio y/o países limítrofes, y su posterior regreso.',
      icon: <Plane size={40} className="text-blue-900" />, 
    },
    {
      title: 'SERVICIO DE ASISTENCIA AL HOGAR',
      description:
        'Comprende Urgencias Domiciliarias (Plomería - Electricidad - Gas - Cerrajería - Cristales - Destapaciones).',
      icon: <Home size={40} className="text-blue-900" />, 
    },
    {
      title: 'SERVICIO DE ASISTENCIA EN LA VIA PÚBLICA',
      description:
        'El servicio de asistencia de Bolso Protegido, es el conjunto de prestaciones asistenciales que amparan al beneficiario de las mismas ante una situación de hurto, robo o intento de ellos.',
      icon: <ShieldCheck size={40} className="text-blue-900" />, 
    },
    {
      title: 'SERVICIO DE LINEA DE INFORMACIÓN MÉDICA',
      description:
        'Las solicitudes de información podrán versar sobre temas de salud en general, prospectos de medicamentos, salud materno infantil, recomendaciones dietarias, enfermedades frecuentes, información para viajeros y farmacias de turno.',
      icon: <Heart size={40} className="text-blue-900" />, 
    },
    {
      title: 'SERVICIO DE ASISTENCIA LEGAL',
      description:
        'Se prestará exclusivamente en Argentina. La función del abogado será orientar al beneficiario en cuanto a los pasos a seguir o sus opciones más convenientes.',
      icon: <Gavel size={40} className="text-blue-900" />, 
    },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md m-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Nuestros Beneficios</h1>
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {benefit.icon}
            <div>
              <h2 className="text-2xl font-semibold text-blue-900">{benefit.title}</h2>
              <p className="text-gray-700 mt-2">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
