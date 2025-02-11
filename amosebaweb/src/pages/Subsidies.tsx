import React from "react";
import { motion } from "framer-motion";
import { Baby, Heart } from "lucide-react";
// import fallecimientoImg from "../assets/fallecimiento.jpg";
// import nacimientoImg from "../assets/nacimiento.jpg";

export const Subsidies: React.FC = () => {
  return (
    <div className="p-10 bg-gray-100 rounded-lg shadow-lg mx-auto max-w-7xl text-center mt-10 mb-10 ">
      <h1 className="text-4xl font-bold mb-6 text-[#A39F73]  flex justify-center items-center gap-2">
        Nuestros Subsidios
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Apoyamos a nuestros socios en los momentos más importantes de sus vidas con subsidios exclusivos.
      </p>

      {/* Subsidio por Fallecimiento */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mb-10 flex flex-col md:flex-row items-center md:items-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <img
          src={fallecimientoImg}
          alt="Subsidio por Fallecimiento"
          className="w-full md:w-1/3 rounded-lg shadow-md"
        /> */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 flex text-center justify-center items-center gap-2">
            <Heart size={30} className="text-[#EEA987]" />
            Subsidio por Fallecimiento
          </h2>
          <p className="text-gray-700 mt-2">
            Este subsidio será entregado a la persona designada por el asociado en su solicitud de ingreso, ayudando a su familia en momentos difíciles.
          </p>
        </div>
      </motion.div>

      {/* Subsidio por Nacimiento */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row-reverse items-center md:items-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <img
          src={nacimientoImg}
          alt="Subsidio por Nacimiento"
          className="w-full md:w-1/3 rounded-lg shadow-md"
        /> */}
        <div className="text-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-700 text-center justify-center flex items-center gap-2">
            <Baby size={30} className="text-[#EEA987]" />
            Subsidio por Nacimiento
          </h2>
          <p className="text-gray-700 mt-2">
            Acompañamos a nuestras familias con un subsidio especial por cada nacimiento o adopción, brindando apoyo en esta nueva etapa de vida.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
