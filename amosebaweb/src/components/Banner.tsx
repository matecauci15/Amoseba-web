// import React from "react";
// import { motion } from "framer-motion";
// // import { pesos } from "../assets";
// import { pesos } from "../assets";

// const Banner: React.FC = () => {
//   return (
//     <div className="relative w-full flex flex-col md:flex-row items-center justify-around text-center overflow-hidden pt-8 md:pt-0 mb-16 bg-[#CAC792]">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="mt-1 flex justify-center"
//       >
//         <motion.img
//           src={pesos}
//           alt="Pesos argentinos"
//           className="drop-shadow-xl rounded-md w-full max-w-xs sm:max-w-sm md:max-w-4xl md:-ml-20 lg:max-w-3xl mt-6 sm:mt-4 md:mt-24 " 
//           animate={{ 
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </motion.div>

//       <motion.div 
//         className="flex flex-col items-center text-center text-white md:flex md:flex-col md:items-center md:-mt-32 md:order-1 md:-ml-96 md:text-left"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.p
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ 
//             type: "spring",
//             stiffness: 260,
//             damping: 20,
//             delay: 0.2
//           }}
//           className="text-xl w-62 font-bold bg-white text-[#CAC792] px-6 py-2 text-center rounded-full shadow-md"
//         >
//           EMPLEADOS GCBA
//         </motion.p>

//         <motion.h2
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic text-white mt-4"
//         >
//           TU PRÉSTAMO
//         </motion.h2>

//         <motion.h2
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//           className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold italic text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4 mb-9"
//         >
//           INMEDIATO
//         </motion.h2>
// {/* 
//         <motion.a
//   href="https://wa.me/5491123456789" // Reemplaza con el número de WhatsApp real
//   target="_blank"
//   rel="noopener noreferrer"
//   initial={{ opacity: 0, scale: 0.8 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
//   whileHover={{
//     scale: 1.1,
//     boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.8)", // Efecto de resplandor
//   }}
//   whileTap={{ scale: 0.95 }} // Efecto de presión al hacer clic
//   className="text-sm sm:text-xl text-white font-bold uppercase bg-[#10B981] px-3 py-2 rounded-lg mt-6 max-w-xs sm:max-w-lg text-center transition-all duration-300 ease-in-out shadow-xl hover:bg-[#059669] 

//   fixed bottom-6  md:p-3 right-6 sm:static sm:mt-6 z-50" // Fijo en mobile, normal en desktop
// >
//   🚀 Solicita Ahora !  
// </motion.a> */}



// <motion.a
//   href="https://wa.me/5491123456789" // Reemplaza con el número de WhatsApp real
//   target="_blank"
//   rel="noopener noreferrer"
//   initial={{ opacity: 0, scale: 0.8 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
//   whileHover={{
//     scale: 1.1,
//     boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.8)", // Efecto de resplandor
//   }}
//   whileTap={{ scale: 0.95 }} // Efecto de presión al hacer clic
//   className="text-sm sm:text-xl text-white font-bold uppercase bg-[#10B981] px-3 py-2 rounded-lg mt-2 max-w-xs sm:max-w-lg text-center transition-all duration-300 ease-in-out shadow-xl hover:bg-[#059669] 
//   md:p-3 sm:static sm:mt-2 z-50" // Fijo en mobile, normal en desktop
// >
//   🚀 Solicita Ahora !  
// </motion.a>


//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white"></div>
//     </div>
//   );
// };

// export default Banner;



// ! -------------------------------------------------

// import React from "react";
// import { motion } from "framer-motion";
// import { pesos } from "../assets";

// const Banner: React.FC = () => {
//   return (
//     <div className="relative w-full flex flex-col md:flex-row items-center justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792]">
      
//       {/* Contenedor de la imagen */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="flex justify-center w-full md:w-1/2 px-4 md:px-8"
//       >
//         <motion.img
//           src={pesos}
//           alt="Pesos argentinos"
//           className="drop-shadow-xl rounded-md w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] md:ml-36 lg:max-w-[900px]" 
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </motion.div>

//       {/* Contenedor del texto */}
//       <motion.div 
//         className="flex flex-col items-center text-center text-white md:text-left px-6 md:px-16 md:mr-14 max-w-2xl mb-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.p
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
//           className="text-lg sm:text-xl font-bold bg-white text-[#CAC792] px-6 py-2 rounded-full shadow-md"
//         >
//           EMPLEADOS GCBA
//         </motion.p>

//         <motion.h2
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold italic text-white mt-4"
//         >
//           TU PRÉSTAMO
//         </motion.h2>

//         <motion.h2
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
//         >
//           INMEDIATO
//         </motion.h2>
//         {/* Botón de WhatsApp */}
//         <motion.a
//           href="https://wa.me/5491123456789"
//           target="_blank"
//           rel="noopener noreferrer"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
//           whileHover={{
//             scale: 1.1,
//             boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.8)",
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="text-sm sm:text-xl text-white font-bold uppercase bg-[#10B981] px-5 py-3 rounded-lg mt-6 max-w-xs sm:max-w-lg text-center transition-all duration-300 ease-in-out shadow-xl hover:bg-[#059669] 
//           md:static fixed bottom-6 right-6 z-50"
//         >
//           🚀 Solicitá Ahora !  
//         </motion.a>
//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white"></div>
//     </div>
//   );
// };

// export default Banner;




import React from "react";
import { motion } from "framer-motion";
import { pesos } from "../assets";

const EnhancedButton = () => {
  return (
    <motion.a
      href="https://wa.me/5491123456789"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: 0.8, 
        duration: 0.6, 
        ease: [0.175, 0.885, 0.32, 1.275]
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 30px rgba(16, 185, 129, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center justify-center mt-10 gap-2 
        bg-gradient-to-r from-[#EEA987] to-[#A39F73]
        px-6 py-4 rounded-2xl
        text-base sm:text-xl font-bold text-white 
        shadow-[0_4px_20px_rgba(238,169,135,0.25)]
        transition-all duration-300
        overflow-hidden
        md:static z-50
        hover:from-[#A39F73] hover:to-[#EEA987]"
    >
      {/* Animated background shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
        translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      
      {/* Pulsing circle behind the rocket */}
      <motion.div
        className="absolute left-4 w-8 h-8 bg-white/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Text container */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">🚀</span>
        <span className="relative">
          Solicitá Ahora
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40 
            scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </span>
      </div>
    </motion.a>
  );
};

const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792]">
      
      {/* Contenedor de la imagen */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full md:w-1/2 px-4 md:px-8"
      >
        <motion.img
          src={pesos}
          alt="Pesos argentinos"
          className="drop-shadow-xl rounded-md w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] md:ml-36 lg:max-w-[900px]" 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Contenedor del texto */}
      <motion.div 
        className="flex flex-col items-center text-center text-white md:text-left px-6 md:px-16 md:mr-14 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="text-lg sm:text-xl font-bold bg-white text-[#CAC792] px-6 py-2 rounded-full shadow-md"
        >
          EMPLEADOS GCBA
        </motion.p>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold italic text-white mt-4"
        >
          TU PRÉSTAMO
        </motion.h2>

        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
        >
          INMEDIATO
        </motion.h2>

        <EnhancedButton />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default Banner;