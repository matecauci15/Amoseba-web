
// import { useState, useEffect, useRef } from "react";
// import { Facebook, Instagram, Menu, X } from "lucide-react";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import amosebalogo from "../assets/amosebalogo.png";
// import CTAButton from "./CTAbutton";

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const menuRef = useRef<HTMLDivElement>(null);

//   const navItems: { name: string; href: string }[] = [
//     { name: "Nosotros", href: "/Amoseba-web/nosotros" },
//     { name: "Beneficios", href: "/Amoseba-web/beneficios" },
//     { name: "Subsidios", href: "/Amoseba-web/subsidios" },
//     { name: "Servicios", href: "/Amoseba-web/servicios" },
//     { name: "Contacto", href: "/Amoseba-web/contacto" },
//     { name: "Beneficios Plus", href: "https://amosebaplus.com/" },
//   ];

//   // Cerrar el menú al hacer clic fuera
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Cierra el menú cuando se hace clic en un enlace en pantallas pequeñas
//   const handleNavLinkClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
// <div className="fixed z-50 top-0 left-1/2 transform -translate-x-1/2 w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl px-4">
// {/* Main Navbar */}
//       <header className="w-full md:w-[85%] max-h-15 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
//         {/* Logo */}
//         <div className="flex md:w-64 md:max-w-64 md:ml-10 w-48 sm:w-56">
//           <Link to="/Amoseba-web">
//             <img
//               src={amosebalogo}
//               alt="Logo"
//               className="object-contain w-[clamp(140px,18vw,200px)] h-auto"
//             />
//           </Link>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden md:flex">
//           <ul className="flex space-x-1 lg:space-x-5 w-auto h-auto">
//             {navItems.slice(0, -1).map((item) => (
//               <li key={item.name} className="min-w-[90px] max-w-[160px]">
//                 <Link
//                   to={item.href}
//                   className={`text-white text-xs max-w-24 w-full h-6 bg-[#E8A598]/70 rounded-4xl px-3 py-1.5 hover:bg-[#E8A598]/90 transition-colors duration-200 flex items-center justify-center text-[clamp(0.75rem,1vw,0.85rem)] ${
//                     location.pathname === item.href ? "font-bold" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="flex justify-center space-x-4"> 
//           {/* <h3 className="text-xl font-bold font-montserrat">Síguenos</h3> */} 
//           <Link
//           to="https://www.facebook.com/amoseba.caba">
//           <div className='bg-transparent text-[#E8A598] border-2 rounded-4xl p-2 hover:text-[#EEA987]'>
//               <Facebook size={17} />
//               </div>
//                 </Link>
//                 <Link to="https://www.instagram.com/amosebapresta/">
//           <div className='bg-transparent text-[#E8A598] border-2 rounded-4xl p-2 hover:text-[#EEA987]'>
//               <Instagram size={17} />
//             </div>
//                 </Link>
//           </div>
//         {/* Hamburger Menu (Mobile) */}
//         <button
//           className="md:hidden flex items-center justify-center p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <X size={28} className="text-[#E8A598] transition-transform duration-200" />
//           ) : (
//             <Menu size={28} className="text-[#E8A598] transition-transform duration-200" />
//           )}
//         </button>
//       </header>
//         <CTAButton />
        
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav
//           ref={menuRef}
//           className="w-11/12 md:hidden mt-2 bg-white rounded-3xl text-center text-white shadow-lg p-6 absolute top-[90px] z-50 left-1/2 transform -translate-x-1/2"
//         >
//           <ul className="space-y-3">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.href}
//                   onClick={handleNavLinkClick}
//                   className="block bg-[#E8A598] rounded-2xl px-4 py-2 hover:bg-[#E8A598]/90 transition-colors duration-200"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

import { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import amosebalogo from "../assets/amosebalogo.png";
import CTAButton from "./CTAbutton";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems: { name: string; href: string }[] = [
    { name: "Nosotros", href: "/Amoseba-web/nosotros" },
    { name: "Beneficios", href: "/Amoseba-web/beneficios" },
    { name: "Subsidios", href: "/Amoseba-web/subsidios" },
    { name: "Servicios", href: "/Amoseba-web/servicios" },
    { name: "Contacto", href: "/Amoseba-web/contacto" },
    { name: "Beneficios Plus", href: "https://amosebaplus.com/" },
  ];

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cierra el menú cuando se hace clic en un enlace en pantallas pequeñas
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed z-50 top-0 left-1/2 transform -translate-x-1/2 w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl px-4">
      {/* Main Navbar */}
      <header className="w-full md:w-[85%] max-h-15 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
        {/* Logo */}
        <div className="flex md:w-64 md:max-w-64 md:ml-10 w-40 sm:w-48">
          <Link to="/Amoseba-web">
            <img
              src={amosebalogo}
              alt="Logo"
              className="object-contain w-[clamp(120px,16vw,200px)] h-auto"
            />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-1 lg:space-x-5 w-auto h-auto">
            {navItems.slice(0, -1).map((item) => (
              <li key={item.name} className="min-w-[90px] max-w-[160px]">
                <Link
                  to={item.href}
                  className={`text-white text-xs max-w-24 w-full h-6  bg-[#F3AA00] rounded-4xl px-3 py-1.5 hover:bg-[#F3AA00]/70 transition-colors duration-200 flex items-center justify-center text-[clamp(0.75rem,1vw,0.85rem)] ${
                    location.pathname === item.href ? "font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons - Hidden on small screens */}
        <div className="hidden md:flex justify-center space-x-4"> 
          <Link to="https://www.facebook.com/amoseba.caba">
            <div className='bg-transparent text-[#F3AA00] border-2 rounded-4xl p-2 hover:text-[#EEA987]'>
              <Facebook size={17} />
            </div>
          </Link>
          <Link to="https://www.instagram.com/amosebapresta/">
            <div className='bg-transparent text-[#F3AA00] border-2 rounded-4xl p-2 hover:text-[#EEA987]'>
              <Instagram size={17} />
            </div>
          </Link>
        </div>
        
        {/* Mobile: Social + Hamburger in same container */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Social Icons - Smaller on mobile */}
          <div className="flex space-x-1">
            <Link to="https://www.facebook.com/amoseba.caba">
              <div className='bg-transparent text-[#F3AA00] border-2 rounded-4xl p-1 hover:text-[#EEA987]'>
                <Facebook size={14} />
              </div>
            </Link>
            <Link to="https://www.instagram.com/amosebapresta/">
              <div className='bg-transparent text-[#F3AA00] border-2 rounded-4xl p-1 hover:text-[#EEA987]'>
                <Instagram size={14} />
              </div>
            </Link>
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            className="flex items-center justify-center p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} className="text-[#E8A598] transition-transform duration-200" />
            ) : (
              <Menu size={28} className="text-[#E8A598] transition-transform duration-200" />
            )}
          </button>
        </div>
      </header>
      
      <CTAButton />
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="w-11/12 md:hidden -mt-8 bg-white rounded-3xl text-center text-white shadow-lg p-6 absolute top-[90px] z-50 left-1/2 transform -translate-x-1/2"
        >
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={handleNavLinkClick}
                  className="block bg-[#E8A598] rounded-2xl px-4 py-2 hover:bg-[#E8A598]/90 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};