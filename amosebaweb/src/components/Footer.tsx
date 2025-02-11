// import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { logo } from '../assets/index';
import { Link } from 'react-router-dom';

export const Footer = () => (
  // <footer className=" bg-gradient-to-r from-[#A39F73] to-[#CAC792] text-white py-12">
  <footer className=" bg-[#A39F73] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 justify-items-center ">
        {/* <div className="text-center"> 
            <h3 className="text-xl font-bold mb-4">AMOESYECBA</h3>
            <p className="text-white">
              Mutual de Trabajadores y Empleados de la Salud y Educación
            </p>
          </div> */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} className="text-white" />
              <span>+54 (11) 1234-5678</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} className="text-white" />
              <span>info@amoesyecba.org.ar</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} className="text-white" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
        <div className="">
        <h3 className="text-xl font-bold mb-2">AMOESYECBA</h3>
        <div className='justify-center items-center flex flex-col'>
          <ul>
            <Link to="/about">
              <li className="mb-1 hover:text-[#e4baa4]">- Nosotros</li>
            </Link>
            <Link to="/benefits">
              <li className="mb-1 hover:text-[#e4baa4]">- Beneficios</li>
            </Link>
            <Link to="/subsidios">
              <li className="mb-1 hover:text-[#e4baa4]">- Subsidios</li>
            </Link>
            <Link to="/services">
              <li className="mb-1 hover:text-[#e4baa4]">- Servicios</li>
            </Link>
            <Link to="/contact">
              <li className="mb-1 hover:text-[#e4baa4]">- Contacto</li>
            </Link>
          </ul>
        </div>
        </div>
        <div className="text-center items-center flex flex-col">
          {" "}
          {/* Centra el contenido y los íconos */}
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex justify-center space-x-4">
            {" "}
            {/* Centra las redes sociales */}
            <a
              href="https://www.facebook.com/amoseba.caba"
              className="text-white hover:text-[#EEA987]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-[#EEA987]"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/amosebapresta/"
              className="text-white hover:text-[#EEA987]"
            >
              <Instagram size={20} />
            </a>
          </div>
          <img src={logo} alt="logo" className="h-18 mt-2" />
        </div>
      </div>
      {/* <div className="border-t border-blue-800 mt-8 pt-8 text-center text-white">
        © 2025 AMOESYECBA. Todos los derechos reservados.
      </div> */}
    </div>
  </footer>
);
  