// // import React from 'react';
// import { motion } from 'framer-motion';
// import { Eye, Plane, Home, ShieldCheck, Heart, Gavel } from 'lucide-react';

// export const Benefits = () => {
//   const benefits = [
//     {
//       title: 'ÓPTICA',
//       description: 'La Mutual entrega sin cargo 2 pares de anteojos recetados por año calendario.',
//       icon: <Eye size={40} className="text-blue-900" />, 
//     },
//     {
//       title: 'SERVICIO DE ASISTENCIA AL VIAJERO REGIONAL',
//       description:
//         'Los Servicios de Asistencia al Viajero se prestan en viaje la salida del beneficiario hacia cualquier destino dentro del territorio argentino situado a más de 100 kms. de su domicilio y/o países limítrofes, y su posterior regreso.',
//       icon: <Plane size={40} className="text-blue-900" />, 
//     },
//     {
//       title: 'SERVICIO DE ASISTENCIA AL HOGAR',
//       description:
//         'Comprende Urgencias Domiciliarias (Plomería - Electricidad - Gas - Cerrajería - Cristales - Destapaciones).',
//       icon: <Home size={40} className="text-blue-900" />, 
//     },
//     {
//       title: 'SERVICIO DE ASISTENCIA EN LA VIA PÚBLICA',
//       description:
//         'El servicio de asistencia de Bolso Protegido, es el conjunto de prestaciones asistenciales que amparan al beneficiario de las mismas ante una situación de hurto, robo o intento de ellos.',
//       icon: <ShieldCheck size={40} className="text-blue-900" />, 
//     },
//     {
//       title: 'SERVICIO DE LINEA DE INFORMACIÓN MÉDICA',
//       description:
//         'Las solicitudes de información podrán versar sobre temas de salud en general, prospectos de medicamentos, salud materno infantil, recomendaciones dietarias, enfermedades frecuentes, información para viajeros y farmacias de turno.',
//       icon: <Heart size={40} className="text-blue-900" />, 
//     },
//     {
//       title: 'SERVICIO DE ASISTENCIA LEGAL',
//       description:
//         'Se prestará exclusivamente en Argentina. La función del abogado será orientar al beneficiario en cuanto a los pasos a seguir o sus opciones más convenientes.',
//       icon: <Gavel size={40} className="text-blue-900" />, 
//     },
//   ];

//   return (
//     <div className="p-6 bg-white rounded shadow-md m-4 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Nuestros Beneficios</h1>
//       <div className="space-y-8">
//         {benefits.map((benefit, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md text-center md:text-left"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5, ease: 'easeOut' }}
//           >
//             {benefit.icon}
//             <div>
//               <h2 className="text-2xl font-semibold text-blue-900">{benefit.title}</h2>
//               <p className="text-gray-700 mt-2">{benefit.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Eye, Plane, Home, ShieldCheck, Heart, Gavel } from 'lucide-react';

// Importa imágenes locales (de la carpeta assets/benefits)
import optica from '../assets/optica.png';
import viaje from '../assets/viaje.png';
import hogar from '../assets/hogar.png';
import calle from '../assets/calle.png';
import linea from '../assets/linea.png';
import legal from '../assets/legal.png';

interface Benefit {
  title: string;
  description: string | string[];
  icon: JSX.Element;
  image: string;
}

export const Benefits: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const benefits: Benefit[] = [
    { title: "ÓPTICA", description: "Entrega sin cargo 2 pares de anteojos recetados al año", icon: <Eye size={30} className="text-[#EEA987]" />, image: optica },
    { title: "ASISTENCIA AL VIAJERO", description: "Los Servicios de Asistencia al Viajero se prestan en viaje (salida del beneficiario a más de 100 kms. de su domicilio y su posterior regreso)", icon: <Plane size={30} className="text-[#EEA987]" />, image: viaje },
    { title: "ASISTENCIA AL HOGAR", description: "Comprende Urgencias Domiciliarias (Plomería - Electricidad - Gas - Cerrajería - Cristales - Destapaciones)", icon: <Home size={30} className="text-[#EEA987]" />, image: hogar },
    { title: "ASISTENCIA EN LA VÍA PÚBLICA", description: "El servicio de asistencia de Bolso Protegido, es el conjunto de prestaciones asistenciales que amparan al beneficiario de las mismas ante una situación de hurto, robo o intento de ellos", icon: <ShieldCheck size={30} className="text-[#EEA987]" />, image: calle },
    { 
      title: "LÍNEA DE INFORMACIÓN MÉDICA", 
      description: `Las solicitudes de información podrán versar sobre los siguientes temas:
Salud en general: tabaquismo, quemaduras solares, agua potable, etc.
Prospectos: Información sobre el prospecto de medicamentos brindada por los laboratorios.
Salud materno infantil: vacunación, obesidad en la niñez.
Recomendaciones dietarias generales vinculadas a trastornos médicos.
Información sobre enfermedades frecuentes: asma, hipertensión, diabetes, etc.
Información para viajeros: vacunación necesaria según el destino del viaje, precauciones antes de viajar.
Información sobre centros médicos de la red pública y privada dentro de laRepública Argentina.
Farmacias de turno dentro de la República Argentina.`,
      icon: <Heart size={30} className="text-[#EEA987]" />, 
      image: linea 
    },
    { 
      title: "ASISTENCIA LEGAL", 
      description: [
        "Consultas de accidentología vial.",
        "Consultas relacionadas a derecho laboral.",
        "Consultas relacionadas a derecho civil.",
        "Consultas relacionadas a derecho comercial.",
        "Consultas relacionadas a derecho penal.",
      ],
      icon: <Gavel size={30} className="text-[#EEA987]" />, 
      image: legal 
    }
  ];

  return (
    <div className="p-6 md:pl-26 md:pr-26 sm:p-10 bg-gradient-to-b from-[#CAC792] to-gray-50 mt-8 ">
      <h1 className="text-5xl font-montserrat font-black mb-8 text-white text-center">Nuestros Beneficios</h1>

      {/* Grid de Beneficios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 ">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg overflow-hidden h-full transform transition-all hover:scale-[1.08] duration-30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Imagen */}
            <div className="w-full h-40 md:h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img src={benefit.image} alt={benefit.title} className=" w-full h-full object-cover" />
            </div>

            {/* Icono y Título */}
            <div className="flex items-center gap-3 mt-4">
              {benefit.icon}
              <h2 className="text-lg font-semibold text-gray-700">{benefit.title}</h2>
            </div>

            {/* Descripción */}
            {Array.isArray(benefit.description) ? (
              <ul className="text-gray-700 mt-2 text-left list-disc list-inside">
                {benefit.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <>
                <p className="text-gray-700 mt-2 text-center text-sm sm:text-base">
                  {expanded[index] ? benefit.description : `${benefit.description.slice(0, 150)}...`}
                </p>
                {benefit.description.length > 200 && (
                  <button
                    className="mt-2 text-[#A39F73] hover:text-blue-800 text-sm font-semibold"
                    onClick={() => toggleExpand(index)}
                  >
                    {expanded[index] ? "Leer menos" : "Leer más"}
                  </button>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
