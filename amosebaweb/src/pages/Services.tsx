import React from "react";
import { motion } from "framer-motion";
import { Plane, Briefcase } from "lucide-react";
// import turismoImg from "../assets/turismo.jpg";
// import prestamosImg from "../assets/prestamos.jpg";

export const Services: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg mx-auto max-w-7xl text-center mt-10 mb-10">
      <h1 className="text-4xl font-bold mb-6 mt-4 text-[#A39F73] flex justify-center items-center gap-2">
        Nuestros Servicios
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        En AMOSEBA ofrecemos soluciones en turismo y préstamos para mejorar tu bienestar.
      </p>

      {/* Sección de Turismo */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row items-center md:items-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <img
          src={turismoImg}
          alt="Turismo"
          className="w-full md:w-1/3 rounded-lg shadow-md"
        /> */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 justify-center flex items-center gap-2">
            <Plane size={30} className="text-[#EEA987]" />
            Turismo
          </h2>
          <p className="text-gray-700 mt-2">
            Disfruta de viajes nacionales e internacionales con tarifas especiales. 
            Te ofrecemos pasajes aéreos y terrestres, hoteles, cabañas y paquetes turísticos con descuentos exclusivos.
          </p>
        </div>
      </motion.div>

      {/* Sección de Préstamos */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row-reverse items-center md:items-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <img
          src={prestamosImg}
          alt="Gestión de Préstamos"
          className="w-full md:w-1/3 rounded-lg shadow-md"
        /> */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-gray-700 justify-center flex items-center gap-2">
            <Briefcase size={30} className="text-[#EEA987]" />
            Gestión de Préstamos
          </h2>
          <p className="text-gray-700 mt-2">
            A través de convenios con entidades mutuales, ofrecemos ayuda económica a nuestros socios. 
            Te brindamos acceso a préstamos con condiciones favorables y sin costos ocultos.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
