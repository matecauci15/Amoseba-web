import React from 'react';
import Banner from '../components/Banner';
import { Cards } from '../components/Cards';

export const HomePage: React.FC = () => {
  return (
    <> 
      <Banner />
      <div className='text-center items-center align-middle justify-center bg-white p-10 mt-16'> 
        <h1 className='text-[#A39F73] text-2xl font-bold'>BIENVENIDOS A AMOESYECBA</h1>
        <h2 className='text-[#A39F73] mt-10 text-xl font-semibold'>
          ASOCIACIÓN MUTUAL OBREROS, EMPLEADOS DE LA SALUD Y EDUCACION DE LA CIUDAD DE BUENOS AIRES
        </h2>
        <p className='text-[#A39F73] mt-10 text-lg'>
          La Mutual de Trabajadores y Empleados de la Salud y Educación de la Ciudad de Buenos Aires (AMOESYECBA) 
          es una entidad sin fines de lucro que brinda servicios de salud y préstamos a sus asociados.
        </p>
        <Cards />
      </div>
    </>
  );
};
