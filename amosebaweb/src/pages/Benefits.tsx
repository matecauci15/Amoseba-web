import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Eye, Plane, Home, ShieldCheck, Heart, Gavel } from 'lucide-react';

import optica from '../assets/optica.png';
import viaje from '../assets/viaje.png';
import hogar from '../assets/hogar.png';
import calle from '../assets/calle.png';
import linea from '../assets/linea.png';
import legal from '../assets/legal.png';

interface Benefit {
  title: string;
  description: string | string[];
  icon: React.ReactNode;  
  image: string;
}

export const Benefits: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const benefits: Benefit[] = [
    { title: "ÓPTICA", description: "Entrega sin cargo 2 pares de anteojos recetados al año", icon: <Eye size={30} className="text-[#8A8B6C]" />, image: optica },
    { title: "ASISTENCIA AL VIAJERO", description: "Los Servicios de Asistencia al Viajero se prestan en viaje (salida del beneficiario a más de 100 kms. de su domicilio y su posterior regreso)", icon: <Plane size={30} className="text-[#8A8B6C]" />, image: viaje },
    { title: "ASISTENCIA AL HOGAR", description: "Comprende Urgencias Domiciliarias (Plomería - Electricidad - Gas - Cerrajería - Cristales - Destapaciones)", icon: <Home size={30} className="text-[#8A8B6C]" />, image: hogar },
    { title: "ASISTENCIA EN LA VÍA PÚBLICA", description: "El servicio de asistencia de Bolso Protegido, es el conjunto de prestaciones asistenciales que amparan al beneficiario de las mismas ante una situación de hurto, robo o intento de ellos", icon: <ShieldCheck size={30} className="text-[#8A8B6C]" />, image: calle },
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
      icon: <Heart size={30} className="text-[#8A8B6C]" />, 
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
      icon: <Gavel size={30} className="text-[#8A8B6C]" />, 
      image: legal 
    }
  ];

  return (
    <div className="p-6 md:pl-26 md:pr-26 sm:p-10 bg-gradient-to-b from-[#CAC792] to-gray-50 mt-28 ">
      <div>

      <h1 className="text-5xl font-montserrat font-black mb-4 text-white text-center ">
        Nuestros Beneficios
      </h1>
      <div className="w-24 h-1 bg-[#F3AA00] mx-auto rounded-full mb-12"></div>

      </div>

      {/* Grid de Beneficios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 ">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg overflow-hidden h-full transform transition-all hover:scale-[1.08] duration-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Imagen */}
            <div className="w-full h-40 md:h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={benefit.image}
                alt={benefit.title}
                className=" w-full h-full object-cover"
              />
            </div>

            {/* Icono y Título */}
            <div className="flex items-center gap-3 mt-4">
              {benefit.icon}
              <h2 className="text-lg font-semibold text-gray-700">
                {benefit.title}
              </h2>
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
                  {expanded[index]
                    ? benefit.description
                    : `${benefit.description.slice(0, 150)}...`}
                </p>
                {benefit.description.length > 150 && (
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


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Eye, Plane, Home, ShieldCheck, Heart, Gavel, ArrowRight, Users } from 'lucide-react';

// import optica from '../assets/optica.png';
// import viaje from '../assets/viaje.png';
// import hogar from '../assets/hogar.png';
// import calle from '../assets/calle.png';
// import linea from '../assets/linea.png';
// import legal from '../assets/legal.png';

// interface Benefit {
//   title: string;
//   description: string | string[];
//   icon: React.ReactNode;
//   image: string;
//   highlight?: string;
// }

// export const Benefits: React.FC = () => {
//   const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
//   const [isFirstLoad, setIsFirstLoad] = useState(true);

//   useEffect(() => {
//     // Auto-select first benefit after initial load
//     if (isFirstLoad) {
//       setTimeout(() => {
//         setSelectedBenefit(0);
//         setIsFirstLoad(false);
//       }, 500);
//     }
//   }, [isFirstLoad]);

//   const benefits: Benefit[] = [
//     { 
//       title: "ÓPTICA", 
//       description: "Entrega sin cargo 2 pares de anteojos recetados al año para todos los beneficiarios. Incluye armazón y cristales estándar según prescripción médica.",
//       icon: <Eye size={24} className="text-[#EEA987]" />, 
//       image: optica,
//       highlight: "2 pares de anteojos anuales sin cargo"
//     },
//     { 
//       title: "ASISTENCIA AL VIAJERO", 
//       description: "Los Servicios de Asistencia al Viajero se prestan en viaje (salida del beneficiario a más de 100 kms. de su domicilio y su posterior regreso). Incluye atención médica de emergencia, medicamentos, traslados sanitarios y repatriaciones.", 
//       icon: <Plane size={24} className="text-[#EEA987]" />, 
//       image: viaje,
//       highlight: "Cobertura nacional e internacional"
//     },
//     { 
//       title: "ASISTENCIA AL HOGAR", 
//       description: "Comprende Urgencias Domiciliarias (Plomería - Electricidad - Gas - Cerrajería - Cristales - Destapaciones). Servicio las 24 horas, todos los días del año.", 
//       icon: <Home size={24} className="text-[#EEA987]" />, 
//       image: hogar,
//       highlight: "Atención 24/7 los 365 días del año"
//     },
//     { 
//       title: "ASISTENCIA EN LA VÍA PÚBLICA", 
//       description: "El servicio de asistencia de Bolso Protegido, es el conjunto de prestaciones asistenciales que amparan al beneficiario ante una situación de hurto, robo o intento de ellos. Incluye reposición de documentos y asesoramiento inmediato.", 
//       icon: <ShieldCheck size={24} className="text-[#EEA987]" />, 
//       image: calle,
//       highlight: "Protección integral ante robos"
//     },
//     { 
//       title: "LÍNEA DE INFORMACIÓN MÉDICA", 
//       description: [
//         "Salud en general: tabaquismo, quemaduras solares, agua potable, etc.",
//         "Prospectos: Información sobre el prospecto de medicamentos.",
//         "Salud materno infantil: vacunación, obesidad en la niñez.",
//         "Recomendaciones dietarias generales vinculadas a trastornos médicos.",
//         "Información sobre enfermedades frecuentes: asma, hipertensión, diabetes.",
//         "Información para viajeros: vacunación necesaria según el destino.",
//         "Información sobre centros médicos de la red pública y privada.",
//         "Farmacias de turno dentro de la República Argentina."
//       ],
//       icon: <Heart size={24} className="text-[#EEA987]" />, 
//       image: linea,
//       highlight: "Orientación médica profesional inmediata"
//     },
//     { 
//       title: "ASISTENCIA LEGAL", 
//       description: [
//         "Consultas de accidentología vial.",
//         "Consultas relacionadas a derecho laboral.",
//         "Consultas relacionadas a derecho civil.",
//         "Consultas relacionadas a derecho comercial.",
//         "Consultas relacionadas a derecho penal.",
//       ],
//       icon: <Gavel size={24} className="text-[#EEA987]" />, 
//       image: legal,
//       highlight: "Asesoramiento jurídico experto"
//     }
//   ];

//   return (
//     <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-15">
//             Nuestros <span className="text-[#CAC792]">Beneficios</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Descubre todos los servicios exclusivos que tenemos para ofrecerte. Selecciona cada beneficio para conocer más detalles.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left side - Benefit icons */}
//           <div className="lg:w-1/3">
//             <div className="sticky top-24 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//               <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
//                 <Users size={20} className="text-[#CAC792]" />
//                 <span>Beneficios disponibles</span>
//               </h3>
              
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer mb-3 transition-all duration-300 ${
//                     selectedBenefit === index 
//                       ? 'bg-gradient-to-r from-[#CAC792]/20 to-[#EEA987]/10 shadow-sm' 
//                       : 'hover:bg-gray-50'
//                   }`}
//                   onClick={() => setSelectedBenefit(index)}
//                   whileHover={{ x: 5 }}
//                 >
//                   <div className={`p-3 rounded-full transition-all duration-300 ${
//                     selectedBenefit === index 
//                       ? 'bg-gradient-to-r from-[#CAC792] to-[#EEA987]' 
//                       : 'bg-gray-100'
//                   }`}>
//                     {React.cloneElement(benefit.icon as React.ReactElement, { 
//                       className: selectedBenefit === index ? 'text-white' : 'text-gray-500',
//                       size: 20
//                     })}
//                   </div>
//                   <div className="flex-1">
//                     <span className={`font-medium block ${
//                       selectedBenefit === index ? 'text-[#CAC792]' : 'text-gray-700'
//                     }`}>
//                       {benefit.title}
//                     </span>
//                     {benefit.highlight && (
//                       <span className="text-xs text-gray-500 block mt-1">{benefit.highlight}</span>
//                     )}
//                   </div>
//                   {selectedBenefit === index && (
//                     <ArrowRight size={16} className="text-[#CAC792]" />
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
          
//           {/* Right side - Benefit details */}
//           <div className="lg:w-2/3">
//             <AnimatePresence mode="wait">
//               {selectedBenefit !== null ? (
//                 <motion.div 
//                   key={selectedBenefit}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="relative h-64 md:h-80 overflow-hidden">
//                     <img 
//                       src={benefits[selectedBenefit].image} 
//                       alt={benefits[selectedBenefit].title}
//                       className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                     <div className="absolute bottom-0 left-0 p-6">
//                       <span className="inline-block px-3 py-1 bg-[#EEA987] text-white text-sm rounded-full mb-3">
//                         {benefits[selectedBenefit].highlight}
//                       </span>
//                       <h3 className="text-2xl font-bold text-white flex items-center gap-3">
//                         {React.cloneElement(benefits[selectedBenefit].icon as React.ReactElement, { 
//                           className: 'text-white', 
//                           size: 28
//                         })}
//                         {benefits[selectedBenefit].title}
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="p-8">
//                     {typeof benefits[selectedBenefit].description === 'string' ? (
//                       <p className="text-gray-600 leading-relaxed text-lg">
//                         {benefits[selectedBenefit].description}
//                       </p>
//                     ) : (
//                       <div>
//                         <h4 className="font-medium text-gray-800 mb-4">Este servicio incluye:</h4>
//                         <ul className="space-y-3">
//                           {benefits[selectedBenefit].description.map((item, i) => (
//                             <motion.li 
//                               key={i} 
//                               className="flex items-start text-gray-600"
//                               initial={{ opacity: 0, x: -10 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ duration: 0.3, delay: i * 0.1 }}
//                             >
//                               <div className="min-w-6 h-6 rounded-full bg-[#CAC792]/20 flex items-center justify-center mr-3 mt-0.5">
//                                 <span className="text-[#CAC792] text-sm">✓</span>
//                               </div>
//                               <span className="text-gray-600">{item}</span>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
                    
//                     <div className="mt-8 pt-6 border-t border-gray-100">
//                       <div className="flex justify-between items-center">
//                         <p className="text-sm text-gray-500">
//                           Para más información, contacte a nuestro centro de atención
//                         </p>
//                         <button className="px-4 py-2 bg-[#CAC792] text-white rounded-lg hover:bg-[#BBB87F] transition-colors duration-300">
//                           Solicitar
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <motion.div 
//                   className="flex items-center justify-center h-64 bg-white rounded-xl border border-dashed border-gray-300 shadow-sm"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p className="text-gray-500 text-lg">Seleccione un beneficio para ver más información</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };