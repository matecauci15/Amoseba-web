import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md m-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-900 flex justify-center items-center gap-2">
        <Briefcase size={32} className="text-blue-900" /> Nuestros Servicios
      </h1>
      <p className="text-gray-700">
        Explora todos los servicios que ofrecemos para mejorar tu calidad de vida.
      </p>
      <motion.p
        className="mt-4 text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo vitae turpis interdum, ut auctor nisl vestibulum.
      </motion.p>
    </div>
  );
};
