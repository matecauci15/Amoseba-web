// import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
// import { logo } from '../assets/index';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#A39F73] text-white py-12">

    <div className="mx-auto">
      
      <div className="grid md:grid-cols-3 gap-8 justify-items-center">
        <div className="text-center md:text-start">
          <h3 className="text-xl text-center font-bold font-montserrat mb-4">Contacto</h3>
          {/* <div className="space-y-4 text-white flex flex-col items-center md:items-start"> */}
          <div className="space-y-4 text-white flex flex-col  md:items-start">
            <div className="flex items-center gap-5">
              <Phone size={16} className="text-white" />
              <span>+54 (11) 3023 0633</span>
            </div>
            <div className="flex items-center gap-5">
              <Mail size={16} className="text-white" />
              <span>info@amoseba.com.ar</span>
            </div>
            <div className="flex items-center gap-5">
              <MapPin size={16} className="text-white" />
              <span>Florida 165 - 7mo piso <br />Oficina 707 CABA</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center mt-2">
            <ul className="flex flex-col md:items-start">
              <Link to="/Amoseba-Web/nosotros">
                <li className="mb-1.5 hover:text-[#e6b74a] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Nosotros
                </li>
              </Link>
              <Link to="/Amoseba-Web/beneficios">
                <li className="mb-1.5 hover:text-[#e6b74a] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Beneficios
                </li>
              </Link>
              <Link to="/Amoseba-Web/subsidios">
                <li className="mb-1.5 hover:text-[#e6b74a] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Subsidios
                </li>
              </Link>
              <Link to="/Amoseba-Web/servicios">
                <li className="mb-1.5 hover:text-[#e6b74a] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Servicios
                </li>
              </Link>
              <Link to="/Amoseba-Web/contacto">
                <li className="mb-1.5 hover:text-[#e6b74a] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Contacto
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="text-center items-center flex flex-col mt-8">
          <div className="flex justify-center space-x-4"> 
          {/* <h3 className="text-xl font-bold font-montserrat">Síguenos</h3> */} 
          <Link
          to="https://www.facebook.com/amoseba.caba">
          <div className='bg-transparent border-2 rounded-4xl p-2 hover:text-[#e6b74a]'>
              <Facebook size={25} />
              </div>
                </Link>
                <Link to="https://www.instagram.com/amosebapresta/">
          <div className='bg-transparent border-2 rounded-4xl p-2 hover:text-[#e6b74a]'>
              <Instagram size={25} />
            </div>
                </Link>
          </div>
          <Link to="/Amoseba-Web">
            {/* <img src={logo} alt="logo" className="h-22" /> */}
            <div className='font-montserrat font-bold p-3 text-3xl mt-'>
            AMOSEBA
            </div>
          </Link>
          <div className='font-montserrat text-md mt-'>
          Matricula INAES N°2458
            </div>
        </div>
      </div>
    </div>
  </footer>
);