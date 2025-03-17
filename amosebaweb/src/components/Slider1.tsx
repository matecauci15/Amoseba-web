// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import pesos from "../assets/pesos.png";
// import '../index.css';
// import {ypf, burger, carrefour, lenter} from '../assets/index';

// // Original EnhancedButton component
// const EnhancedButton = () => {
//   return (
//     <motion.a
//       href="https://wa.me/5491130230633"
//       target="_blank"
//       rel="noopener noreferrer"
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         delay: 0.8,
//         duration: 0.6,
//         ease: [0.175, 0.885, 0.32, 1.275],
//       }}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: "0px 8px 30px rgba(16, 185, 129, 0.3)",
//       }}
//       whileTap={{ scale: 0.95 }}
//       className="group flex items-center justify-center mt-10 gap-2 
//         bg-[#E8A598]/70
//         px-6 py-4 rounded-2xl
//         text-base sm:text-xl font-bold text-white 
//         shadow-[0_4px_20px_rgba(238,169,135,0.25)]
//         transition-all duration-300
//         overflow-hidden
//         md:static z-0
//         hover:from-[#A39F73] hover:to-[#EEA987]"
//     >
//       {/* Animated background shine effect */}
//       <div
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
//         translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
//       />

//       {/* Text container */}
//       <div className="flex items-center gap-3">
//         <span className="relative">
//           Solicitá Ahora
//           <span
//             className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40 
//             scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//           />
//         </span>
//       </div>
//     </motion.a>
//   );
// };

// // First Banner (your original)
// const Banner1 = () => {
//   return (
//     <div className="relative w-full flex flex-col md:flex-row items-center mt-20 justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792]">
      
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
//           className="drop-shadow-xl rounded-md w-full max-w-[250px] sm:max-w-[300px] md:max-w-[500px] md:ml-36 lg:max-w-[900px]" 
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </motion.div>

//       {/* Contenedor del texto */}
//       <motion.div 
//         className="flex flex-col items-center text-center md:text-left px-6 md:px-16 md:mr-14 max-w-2xl mb-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.p
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
//           className="text-lg sm:text-xl font-montserrat font-bold bg-white text-[#CAC792] px-6 py-2 rounded-full shadow-md"
//         >
//           EMPLEADOS GCBA
//         </motion.p>

//         <motion.h2
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-4xl text-center sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mt-4"
//         >
//           TU PRÉSTAMO
//         </motion.h2>

//         <motion.h2
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//           className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
//         >
//           INMEDIATO
//         </motion.h2>

//         <EnhancedButton />
//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white"></div>
//     </div>
//   );
// };

// // Second Banner (similar to benefits screen)
// const Banner2 = () => {
//   return (
//     // <div className="relative w-full flex flex-col items-center mt-20 justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792]">
//     <div className="relative w-full flex  md:flex-row items-center mt-20 justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792]">

      
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-6xl px-4"
//       >
//         <motion.p
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
//           className="text-lg sm:text-xl font-montserrat font-bold bg-white text-[#E8A598] px-6 py-2 rounded-full shadow-md inline-block mb-8"
//         >
//           SI ESTÁS ADHERIDO A AMOSEBA, SOS PARTE DE
//         </motion.p>

//         <motion.h2
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-10"
//         >
//           BENEFICIOS<span className="font-light italic ml-4">plus</span>
//         </motion.h2>

//         <motion.div 
//           className="flex"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           {/* Benefit cards would go here - simplified for example */}
//           <motion.div className=" w-96 h-96"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={burger} alt="" />
//           </motion.div>
          
//           <motion.div className="w-96 h-96"
//             whileHover={{ scale: 1.05 }}
//           >
// <img src={ypf} alt="" />
//           </motion.div>
          
//           <motion.div className="w-96 h-96"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={carrefour} alt="" />
//           </motion.div>
//         </motion.div>
        
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//           className="text-xl text-white font-medium"
//         >
//           ¡Y CONTÁS CON ESTOS Y MUCHOS MÁS BENEFICIOS!
//         </motion.p>
//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white"></div>
//     </div>
//   );
// };

// // Third Banner (for optical products)
// const Banner3 = () => {
//   return (
//     // <div className="relative w-full flex flex-col md:flex-row items-center mt-20 justify-between text-center overflow-hidden py-8 md:py-16 bg-[#86BBD8]">
//     <div className="relative w-full flex flex-col md:flex-row items-center mt-20 justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792]">
      
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="flex justify-center w-full md:w-1/2 px-4 md:px-8"
//       >
//         {/* Using placeholder image - you would replace with your actual image */}
//         <motion.div
//           className="drop-shadow-xl rounded-md w-full max-w-[500px] h-[300px] bg-white/20 flex items-center justify-center"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <div className="text-3xl text-white font-bold">Imagen de Anteojos</div>
//         </motion.div>
//       </motion.div>

//       <motion.div 
//         className="flex flex-col items-center text-center md:text-left px-6 md:px-16 md:mr-14 max-w-2xl mb-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.p
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
//           className="text-lg sm:text-xl font-montserrat font-bold bg-white text-[#86BBD8] px-6 py-2 rounded-full shadow-md"
//         >
//           ÓPTICA EXCLUSIVA
//         </motion.p>

//         <motion.h2
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-4xl text-center sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mt-4"
//         >
//           ANTEOJOS
//         </motion.h2>

//         <motion.h2
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//           className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
//         >
//           40% OFF
//         </motion.h2>

//         <EnhancedButton />
//       </motion.div>

//       {/* Gradient Overlay */}
//       <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white"></div>
//     </div>
//   );
// };

// // Main Carousel Component
// const BannerCarousel = () => {
//   const [currentBanner, setCurrentBanner] = useState(0);
//   const banners = [Banner1, Banner2, Banner3];
//   const BannerComponent = banners[currentBanner];
  
//   // Auto-rotate banners
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % banners.length);
//     }, 8000); // 8 seconds per slide
    
//     return () => clearInterval(timer);
//   }, [banners.length]);
  
//   // Navigation dots
//   const handleDotClick = (index) => {
//     setCurrentBanner(index);
//   };
  
//   return (
//     <div className="relative">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentBanner}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <BannerComponent />
//         </motion.div>
//       </AnimatePresence>
      
//       {/* Navigation dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {banners.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               currentBanner === index ? "bg-gray-800 w-6" : "bg-gray-400"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerCarousel;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pesos from "../assets/pesos.png";
import '../index.css';
import {ypf, burger, carrefour, lentes} from '../assets/index';

// EnhancedButton component
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
        ease: [0.175, 0.885, 0.32, 1.275],
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 30px rgba(16, 185, 129, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center justify-center mt-10 gap-2 
        bg-[#E8A598]/70
        px-6 py-4 rounded-2xl
        text-base sm:text-xl font-bold text-white 
        shadow-[0_4px_20px_rgba(238,169,135,0.25)]
        transition-all duration-300
        overflow-hidden
        md:static z-0
        hover:from-[#A39F73] hover:to-[#EEA987]"
    >
      {/* Animated background shine effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
        translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
      />

      {/* Text container */}
      <div className="flex items-center gap-3">
        <span className="relative">
          Solicitá Ahora
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40 
            scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          />
        </span>
      </div>
    </motion.a>
  );
};

// First Banner
const Banner1 = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792] min-h-[600px]">
      
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
          className="text-lg sm:text-xl font-montserrat font-bold bg-white text-[#CAC792] px-6 py-1 rounded-full shadow-md"
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
          className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
        >
          INMEDIATO
        </motion.h2>

        <EnhancedButton />
      </motion.div>
    </div>
  );
};

const Banner2 = () => {
    return (
      <div className=" relative w-full flex flex-col mt-35 md:mt-0 md:flex-row items-center justify-around text-center overflow-hidden bg-[#CAC792] min-h-[600px]">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col items-center text-center px-6 mx-auto"
        >
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="text-md md:text-lg text-center sm:text-xl font-montserrat font-bold bg-white text-[#CAC792] px-3 md:px-6 py-1 md:py-1 rounded-full shadow-md inline-block mb-4 md:mb-8 max-w-[280px] md:max-w-none"
          >
            SI ESTÁS ADHERIDO A AMOSEBA, SOS PARTE DE
          </motion.p>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold text-white mb-6 text-center"
          >
            BENEFICIOS <br />
            <span className="font-light italic  ">plus</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-white text-center font-medium mb-8"
          >
            ¡Y CONTÁS CON ESTOS <br /> Y MUCHOS MÁS BENEFICIOS!
          </motion.p>
        </motion.div>

        {/* Imágenes */}
        <motion.div
          className="relative w-full md:w-1/2 h-[400px] md:h-[500px] flex justify-center -mt-10 md:-mt-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Burger */}
          <div className="absolute left-1/2 -translate-x-3/4 top-0 w-64 h-64 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] z-30 transform rotate-3">
            <motion.img
              src={burger}
              alt="Burger"
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.15))" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* YPF */}
          <div className="absolute left-1/2 -translate-x-1/2 top-16 w-64 h-64 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] z-20 transform -rotate-6">
            <motion.img
              src={ypf}
              alt="YPF"
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.15))" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Carrefour */}
          <div className="absolute left-1/2 -translate-x-1/4 top-32 w-64 h-64 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] z-10 transform rotate-12">
            <motion.img
              src={carrefour}
              alt="Carrefour"
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.15))" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    );
  };
  
  
// Third Banner
const Banner3 = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between text-center overflow-hidden py-8 md:py-16 bg-[#CAC792] min-h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full md:w-1/2 px-4 md:px-8"
      >
        <motion.div
          className="drop-shadow-xl rounded-md w-full max-w-[500px] h-[300px] flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={lentes} alt="" className="-mt-36" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex -mt-10 flex-col items-center text-center md:text-left px-6 md:px-16 md:mr-14 max-w-2xl mb-20"
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
            delay: 0.2,
          }}
          className="text-md md:text-lg text-center sm:text-xl font-montserrat font-bold bg-white text-[#CAC792] px-3 md:px-6 py-1 md:py-1 rounded-full shadow-md inline-block mb-4 max-w-[280px] md:max-w-none"
        >
          SI SOS PARTE DE AMOSEBA, CONTAS CON
        </motion.p>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl text-center sm:text-4xl lg:text-3xl font-montserrat font-bold text-white"
        >
          2 PARES DE ANTEOJOS RECETADOS AL AÑO
        </motion.h2> 

        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white border-2 px-6 py-3 rounded-full inline-block shadow-lg mt-4"
        >
          SIN CARGO
        </motion.h2>

        {/* <EnhancedButton /> */}
      </motion.div>
    </div>
  );
};

const BannerCarousel = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const banners = [Banner1, Banner2, Banner3];
    const BannerComponent = banners[currentBanner];
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 10000); // 10 seconds per slide
      
      return () => clearInterval(timer);
    }, [currentBanner, banners.length]); // Add currentBanner as a dependency
    
    const handleDotClick = (index: number) => {
      setCurrentBanner(index);
    };
    
    const handlePrevClick = () => {
      setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };
    
    const handleNextClick = () => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    };
    
    return (
      <div className="relative bg-[#CAC792] mt-18">
        {/* Previous Button */}
        <button 
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-3 
          shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Next Button */}
        <button 
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 rounded-full p-3 
          shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BannerComponent />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-4 space-x-2 pb-4">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentBanner === index ? "bg-gray-800 w-6" : "bg-gray-400"
              } cursor-pointer`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-white"></div>
      </div>
    );
  };

export default BannerCarousel;