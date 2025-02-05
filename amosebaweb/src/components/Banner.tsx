// import React from "react";
// import { pesos } from "../assets";

// const Banner: React.FC = () => {
//   return (
//     <div className="w-full flex flex-col md:flex-row items-center justify-around text-center overflow-hidden pt-8 md:pt-0 mb-8">
//       {/* Contenedor de la imagen con ajustes responsive */}
//       <div className="mt-1 flex justify-center"> {/* Asegura que la imagen esté centrada */}
//   <img 
//     src={pesos} 
//     alt="Pesos argentinos" 
//     className="drop-shadow-xl rounded-md w-full max-w-xs sm:max-w-sm md:max-w-4xl md:-ml-10 lg:max-w-3xl mt-6 sm:mt-4 md:mt-24"
//   />
// </div>
//       {/* Contenedor del texto con ajustes responsive */}
//       <div className="flex flex-col items-center text-center text-white md:flex md:flex-col md:items-center md:-mt-32 md:order-1 md:-ml-96 md:text-left">
//         <p className="text-xl w-62 font-bold bg-white text-[#CAC792] px-6 py-2 text-center rounded-full shadow-md">
//           EMPLEADOS GCBA
//         </p>
//         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic text-white mt-4">
//           TU PRÉSTAMO
//         </h2>
//         <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold italic text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4">
//           INMEDIATO
//         </h2>
//         <p className="text-xl text-white mt-6 max-w-lg">
//           Con la tranquilidad de no tener costos ocultos
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React from "react";
import { motion } from "framer-motion";
import { pesos } from "../assets";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-around text-center overflow-hidden pt-8 md:pt-0 mb-16">
      {/* Image container with fade-in and float animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-1 flex justify-center"
      >
        <motion.img
          src={pesos}
          alt="Pesos argentinos"
          className="drop-shadow-xl rounded-md w-full max-w-xs sm:max-w-sm md:max-w-4xl md:-ml-10 lg:max-w-3xl mt-6 sm:mt-4 md:mt-24"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Text container with staggered animations */}
      <motion.div 
        className="flex flex-col items-center text-center text-white md:flex md:flex-col md:items-center md:-mt-32 md:order-1 md:-ml-96 md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="text-xl w-62 font-bold bg-white text-[#CAC792] px-6 py-2 text-center rounded-full shadow-md"
        >
          EMPLEADOS GCBA
        </motion.p>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic text-white mt-4"
        >
          TU PRÉSTAMO
        </motion.h2>

        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold italic text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
        >
          INMEDIATO
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl text-white mt-6 max-w-lg"
        >
          Con la tranquilidad de no tener costos ocultos
        </motion.p>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default Banner;


// import React from "react";
// import { motion } from "framer-motion"; // Importa Framer Motion
// import { pesos } from "../assets";

// const Banner: React.FC = () => {
//   return (
//     <div className="w-full flex flex-col md:flex-row items-center justify-around text-center overflow-hidden pt-8 md:pt-0 mb-8">
//       {/* Contenedor de la imagen con ajustes responsive */}
//       <div className="mt-1 flex justify-center">
//         <motion.img
//           src={pesos}
//           alt="Pesos argentinos"
//           className="drop-shadow-xl rounded-md w-full max-w-xs sm:max-w-sm md:max-w-4xl md:-ml-10 lg:max-w-3xl mt-6 sm:mt-4 md:mt-24"
//           initial={{ opacity: 0, y: 20 }} // Estado inicial
//           animate={{ opacity: 1, y: 0 }} // Estado final
//           transition={{ duration: 1 }} // Duración de la animación
//         />
//       </div>
//       {/* Contenedor del texto con ajustes responsive */}
//       <div className="flex flex-col items-center text-center text-white md:flex md:flex-col md:items-center md:-mt-32 md:order-1 md:-ml-96 md:text-left">
//         <motion.p
//           className="text-xl w-62 font-bold bg-white text-[#CAC792] px-6 py-2 text-center rounded-full shadow-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }} // Retardo de 0.2 segundos
//         >
//           EMPLEADOS GCBA
//         </motion.p>
//         <motion.h2
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic text-white mt-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }} // Retardo de 0.4 segundos
//         >
//           TU PRÉSTAMO
//         </motion.h2>
//         <motion.h2
//           className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold italic text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }} // Retardo de 0.6 segundos
//         >
//           INMEDIATO
//         </motion.h2>
//         <motion.p
//           className="text-xl text-white mt-6 max-w-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }} // Retardo de 0.8 segundos
//         >
//           Con la tranquilidad de no tener costos ocultos
//         </motion.p>
//       </div>
//     </div>
//   );
// };

// export default Banner;