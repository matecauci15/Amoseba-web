// // import React from 'react';
// import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
// import { logo } from '../assets/index';
// import { Link } from 'react-router-dom';

// export const Footer = () => (
//   <footer className=" bg-[#A39F73] text-white py-12">
//     <div className=" mx-auto ">
//       <div className="grid md:grid-cols-3 gap-8 justify-items-center ">
//         <div className="text-start">
//           <h3 className="text-xl font-bold mb-4 justify-start">Contacto</h3>
//           <div className="space-y-4 text-white items-start justify-start">
//             <div className="flex items-center  gap-2">
//               <Phone size={16} className="text-white" />
//               <span>+54 (11) 1234-5678</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail size={16} className="text-white" />
//               <span>info@amoesyecba.org.ar</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin size={16} className="text-white" />
//               <span>Buenos Aires, Argentina</span>
//             </div>
//           </div>
//         </div>
//         <div className="">
//         {/* <h3 className="text-xl font-bold mb-2">AMOESYECBA</h3> */}
//         <div className='justify-start items-center flex flex-col'>
//           <ul>
//             <Link to="/Amoseba-Web/about">
//               <li className="mb-1.5 hover:text-[#e4baa4]">- Nosotros</li>
//             </Link>
//             <Link to="/benefits">
//               <li className="mb-1.5 hover:text-[#e4baa4]">- Beneficios</li>
//             </Link>
//             <Link to="/subsidios">
//               <li className="mb-1.5 hover:text-[#e4baa4]">- Subsidios</li>
//             </Link>
//             <Link to="/services">
//               <li className="mb-1.5 hover:text-[#e4baa4]">- Servicios</li>
//             </Link>
//             <Link to="/contact">
//               <li className="mb-1.5 hover:text-[#e4baa4]">- Contacto</li>
//             </Link>
//           </ul>
//         </div>
//         </div>
//         <div className="text-center items-center flex flex-col">
//           {" "}
//           {/* Centra el contenido y los íconos */}
//           <h3 className="text-xl font-bold mb-4">Síguenos</h3>
//           <div className="flex justify-center space-x-4">
//             {" "}
//             {/* Centra las redes sociales */}
//             <a
//               href="https://www.facebook.com/amoseba.caba"
//               className="text-white hover:text-[#EEA987]"
//             >
//               <Facebook size={20} />
//             </a>
//             <a
//               href="https://twitter.com"
//               className="text-white hover:text-[#EEA987]"
//             >
//               <Twitter size={20} />
//             </a>
//             <a
//               href="https://www.instagram.com/amosebapresta/"
//               className="text-white hover:text-[#EEA987]"
//             >
//               <Instagram size={20} />
//             </a>
//           </div>
//           <img src={logo} alt="logo" className="h-18 mt-2" />
//         </div>
//       </div>
//       {/* <div className="border-t border-blue-800 mt-8 pt-8 text-center text-white">
//         © 2025 AMOESYECBA. Todos los derechos reservados.
//       </div> */}
//     </div>
//   </footer>
// );
  


// import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { logo } from '../assets/index';
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
              <span>+54 (11) 1234-5678</span>
            </div>
            <div className="flex items-center gap-5">
              <Mail size={16} className="text-white" />
              <span>info@amoesyecba.org.ar</span>
            </div>
            <div className="flex items-center gap-5">
              <MapPin size={16} className="text-white" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center mt-2">
            <ul className="flex flex-col md:items-start">
              <Link to="/Amoseba-Web/about">
                <li className="mb-1.5 hover:text-[#e4baa4] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Nosotros
                </li>
              </Link>
              <Link to="/Amoseba-Web/benefits">
                <li className="mb-1.5 hover:text-[#e4baa4] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Beneficios
                </li>
              </Link>
              <Link to="/Amoseba-Web/subsidios">
                <li className="mb-1.5 hover:text-[#e4baa4] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Subsidios
                </li>
              </Link>
              <Link to="/Amoseba-Web/services">
                <li className="mb-1.5 hover:text-[#e4baa4] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Servicios
                </li>
              </Link>
              <Link to="/Amoseba-Web/contact">
                <li className="mb-1.5 hover:text-[#e4baa4] flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" /> Contacto
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="text-center items-center flex flex-col">
          <h3 className="text-xl font-bold mb-8 font-montserrat">Síguenos</h3>
          <div className="flex justify-center space-x-4">
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
          <Link to="/Amoseba-Web">
            <img src={logo} alt="logo" className="h-18 mt-3" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);