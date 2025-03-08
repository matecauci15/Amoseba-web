import React from 'react';
// import Banner from '../components/Banner';

import { Cards } from '../components/Cards';
import BannerCarousel from '../components/Slider1';

export const HomePage: React.FC = () => {
  return (
    <div className='bg-white'>
      {/* <Banner /> */}
      <BannerCarousel />
      <div className='text-center items-center align-middle justify-center bg-white p-10 mt-16'> 
        <div className="flex justify-center">
          <h1 className='text-white text-xl sm:text-2xl font-montserrat font-black bg-[#a9a952] shadow-2xl  px-6 py-2 rounded-full inline-block'>
            BIENVENIDOS A AMOSEBA
          </h1>
        </div>
        <h2 className='text-[#A39F73] mt-5 text-xl font-montserrat font-semibold'>
          ASOCIACIÓN MUTUAL OBREROS, EMPLEADOS DE LA SALUD <br />Y EDUCACION DE LA CIUDAD DE BUENOS AIRES
        </h2>
        <p className='text-[#A39F73] mt-10 text-lg font-montserrat '>
          La Mutual de Trabajadores y Empleados de la Salud y Educación de la Ciudad de Buenos Aires (AMOESYECBA) 
          <br />es una entidad sin fines de lucro que brinda servicios de salud y préstamos a sus asociados.
        </p>
        <Cards />
      </div>
    </div>
  );
};