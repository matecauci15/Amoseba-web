// import React from "react";
// import { motion } from "framer-motion";
// import { Baby, Heart } from "lucide-react";
// // import fallecimientoImg from "../assets/fallecimiento.jpg";
// // import nacimientoImg from "../assets/nacimiento.jpg";

// export const Subsidies: React.FC = () => {
//   return (
//     <div className="p-10 mx-auto text-center mt-8  bg-gradient-to-b from-[#CAC792] to-gray-50">
//       <h1 className="text-5xl font-bold mb-6 text-white  flex justify-center items-center gap-2">
//         Nuestros Subsidios
//       </h1>
//       <p className="text-lg text-gray-700 mb-8">
//         Apoyamos a nuestros socios en los momentos más importantes de sus vidas con subsidios exclusivos.
//       </p>

//       {/* Subsidio por Fallecimiento */}
//       <motion.div
//         className="bg-white p-6 rounded-lg shadow-lg mb-10 flex flex-col md:flex-row items-center md:items-start gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* <img
//           src={fallecimientoImg}
//           alt="Subsidio por Fallecimiento"
//           className="w-full md:w-1/3 rounded-lg shadow-md"
//         /> */}
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-gray-700 flex text-center justify-center items-center gap-2">
//             <Heart size={30} className="text-[#EEA987]" />
//             Subsidio por Fallecimiento
//           </h2>
//           <p className="text-gray-700 mt-2">
//             Este subsidio será entregado a la persona designada por el asociado en su solicitud de ingreso, ayudando a su familia en momentos difíciles.
//           </p>
//         </div>
//       </motion.div>

//       {/* Subsidio por Nacimiento */}
//       <motion.div
//         className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row-reverse items-center md:items-start gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* <img
//           src={nacimientoImg}
//           alt="Subsidio por Nacimiento"
//           className="w-full md:w-1/3 rounded-lg shadow-md"
//         /> */}
//         <div className="text-center justify-center">
//           <h2 className="text-2xl font-semibold text-gray-700 text-center justify-center flex items-center gap-2">
//             <Baby size={30} className="text-[#EEA987]" />
//             Subsidio por Nacimiento
//           </h2>
//           <p className="text-gray-700 mt-2">
//             Acompañamos a nuestras familias con un subsidio especial por cada nacimiento o adopción, brindando apoyo en esta nueva etapa de vida.
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { Baby, Heart, Plus, ChevronRight, Info } from "lucide-react";

interface SubsidyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  colorClass: string;
}

const SubsidyCard: React.FC<SubsidyCardProps> = ({ icon, title, description, details, colorClass }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative group overflow-hidden rounded-2xl transition-all duration-500
        ${isExpanded ? 'h-96' : 'h-64'}`}
    >
      <div className={`absolute inset-0 ${colorClass} opacity-90`} />
      
      {/* Decorative circle */}
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full transform 
        group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10 h-full p-6 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-white/90 mb-4">
          {description}
        </p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto flex items-center gap-2 text-white/90 hover:text-white
            transition-colors duration-300"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <ChevronRight 
            className={`transform transition-transform duration-300
              ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
          />
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-2">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-2 text-white/90">
                <Plus size={16} className="mt-1 flex-shrink-0" />
                <p>{detail}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const Subsidies: React.FC = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#CAC792] to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center p-2 bg-[#A39F73]/10 rounded-full mb-6">
            <Info className="text-[#A39F73]" />
          </div> */}
          <h1 className="text-5xl md:text-5xl font-montserrat font-black text-white mb-4">
            Subsidios para nuestros socios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprometidos con tu bienestar en cada etapa de la vida
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <SubsidyCard
            icon={<Heart size={24} className="text-white" />}
            title="Subsidio por Fallecimiento"
            description="Brindamos apoyo a las familias en los momentos más difíciles"
            details={[
              "Ayuda económica inmediata",
              "Asistencia en trámites administrativos",
              "Soporte personalizado",
              "Cobertura extendida a grupo familiar"
            ]}
            colorClass="bg-gradient-to-br from-[#A39F73] to-[#8B864F]"
          />
          
          <SubsidyCard
            icon={<Baby size={24} className="text-white" />}
            title="Subsidio por Nacimiento"
            description="Celebramos la llegada de nuevos integrantes a la familia"
            details={[
              "Apoyo económico por nacimiento o adopción",
              "Kit de bienvenida para el bebé",
              "Asesoramiento familiar",
              "Beneficios adicionales en farmacias"
            ]}
            colorClass="bg-gradient-to-br from-[#EEA987] to-[#E8805A]"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-6 bg-gray-50 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-600">
              <h3 className="text-xl font-semibold mb-2">¿Necesitas más información?</h3>
              <p>Nuestro equipo está disponible para ayudarte con cualquier consulta.</p>
            </div>
            <button className="px-6 py-3 bg-[#A39F73] text-white rounded-xl hover:bg-[#8B864F] 
              transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsidies;