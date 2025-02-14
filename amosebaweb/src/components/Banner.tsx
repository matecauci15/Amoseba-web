import React from "react";
import { motion } from "framer-motion";
import { pesos } from "../assets";
import '../index.css'

const EnhancedButton = () => {
  return (
    <motion.a
      href="https://wa.me/5491130230633"
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


      {/* Text container */}
      <div className="flex items-center gap-3">
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
          className="drop-shadow-xl rounded-md w-full max-w-[250px] sm:max-w-[300px] md:max-w-[500px] md:ml-36 lg:max-w-[900px]" 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Contenedor del texto */}
      <motion.div 
        className="flex flex-col items-center text-center md:text-left px-6 md:px-16 md:mr-14 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="text-lg sm:text-xl font-montserrat font-bold bg-white text-[#CAC792] px-6 py-2 rounded-full shadow-md"
        >
          EMPLEADOS GCBA
        </motion.p>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl text-center sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mt-4"
        >
          TU PRÉSTAMO
        </motion.h2>

        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
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