// import React from "react";
// import { motion } from "framer-motion";
// import { Plane, Briefcase } from "lucide-react";
// // import turismoImg from "../assets/turismo.jpg";
// // import prestamosImg from "../assets/prestamos.jpg";

// export const Services: React.FC = () => {
//   return (
//     <div className="p-6 bg-gray-100 rounded-xl shadow-lg mx-auto max-w-7xl text-center mt-10 mb-10">
//       <h1 className="text-4xl font-bold mb-6 mt-4 text-[#A39F73] flex justify-center items-center gap-2">
//         Nuestros Servicios
//       </h1>
//       <p className="text-lg text-gray-700 mb-8">
//         En AMOSEBA ofrecemos soluciones en turismo y préstamos para mejorar tu bienestar.
//       </p>

//       {/* Sección de Turismo */}
//       <motion.div
//         className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row items-center md:items-start gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* <img
//           src={turismoImg}
//           alt="Turismo"
//           className="w-full md:w-1/3 rounded-lg shadow-md"
//         /> */}
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-gray-700 justify-center flex items-center gap-2">
//             <Plane size={30} className="text-[#EEA987]" />
//             Turismo
//           </h2>
//           <p className="text-gray-700 mt-2">
//             Disfruta de viajes nacionales e internacionales con tarifas especiales. 
//             Te ofrecemos pasajes aéreos y terrestres, hoteles, cabañas y paquetes turísticos con descuentos exclusivos.
//           </p>
//         </div>
//       </motion.div>

//       {/* Sección de Préstamos */}
//       <motion.div
//         className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row-reverse items-center md:items-start gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* <img
//           src={prestamosImg}
//           alt="Gestión de Préstamos"
//           className="w-full md:w-1/3 rounded-lg shadow-md"
//         /> */}
//         <div className="text-left">
//           <h2 className="text-2xl font-semibold text-gray-700 justify-center flex items-center gap-2">
//             <Briefcase size={30} className="text-[#EEA987]" />
//             Gestión de Préstamos
//           </h2>
//           <p className="text-gray-700 mt-2">
//             A través de convenios con entidades mutuales, ofrecemos ayuda económica a nuestros socios. 
//             Te brindamos acceso a préstamos con condiciones favorables y sin costos ocultos.
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// types.ts


// ServiceCard.tsx
import React from "react";
import { ChevronRight, Plane, Briefcase } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/90 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#CAC792]/20 transition-all duration-500 group-hover:scale-150" />
      
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#CAC792]/20 transition-all duration-300 group-hover:bg-[#CAC792]/30">
          <Icon className="h-7 w-7 text-[#8A8B6C] transition-all duration-300 group-hover:scale-110" />
        </div>
        
        <h3 className="mb-4 text-2xl font-bold text-gray-800">{title}</h3>
        <p className="mb-6 leading-relaxed text-gray-600">{description}</p>
        
        <button 
          className="inline-flex items-center font-medium text-[#8A8B6C] transition-all duration-300 hover:text-[#6B6C54]"
          onClick={() => console.log(`More info clicked for ${title}`)}
        >
          Más información
          <ChevronRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "tourism",
    icon: Plane,
    title: "Turismo",
    description: "Disfruta de viajes nacionales e internacionales con tarifas especiales. Te ofrecemos pasajes aéreos y terrestres, hoteles, cabañas y paquetes turísticos con descuentos exclusivos."
  },
  {
    id: "loans",
    icon: Briefcase,
    title: "Gestión de Préstamos",
    description: "A través de convenios con entidades mutuales, ofrecemos ayuda económica a nuestros socios. Te brindamos acceso a préstamos con condiciones favorables y sin costos ocultos."
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#CAC792] to-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            En AMOSEBA ofrecemos soluciones en turismo y préstamos para <br /> mejorar tu bienestar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;