// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Home as HomeIcon, Users, FileText, Gift, PhoneCall, Menu, X } from 'lucide-react';
// import {logo}  from '../assets/index';

// interface NavbarProps {
//   currentPage: string;
//   setCurrentPage: (page: string) => void;
// }

// export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation(); // Hook para obtener la ruta actual

//   const navItems = [
//     { id: 'inicio', label: 'Inicio', icon: <HomeIcon size={20} />, route: '/' },
//     { id: 'nosotros', label: 'Nosotros', icon: <Users size={20} />, route: '/about' },
//     { id: 'servicios', label: 'Servicios', icon: <FileText size={20} />, route: '/services' },
//     { id: 'beneficios', label: 'Beneficios', icon: <Gift size={20} />, route: '/benefits' },
//     { id: 'contacto', label: 'Contacto', icon: <PhoneCall size={20} />, route: '/contact' },
//   ];

//   useEffect(() => {
//     // Actualiza la página activa según la ruta actual
//     const currentItem = navItems.find((item) => item.route === location.pathname);
//     if (currentItem) {
//       setCurrentPage(currentItem.id);
//     }
//   }, [location, navItems, setCurrentPage]);

//   return (
//     <nav className="bg-[#CAC792] fixed w-full z-50 shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Link
//               to="/"
//               onClick={() => setCurrentPage('inicio')}
//               className="text-2xl font-bold text-white"
//             >
//               <img src={logo} alt="logo" className='h-18' />
//             </Link>
//           </div>

//           <div className="hidden md:flex space-x-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.route}
//                 onClick={() => setCurrentPage(item.id)}
//                 className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200
//                   ${currentPage === item.id 
//                     ? 'bg-[#10B981] text-white' 
//                     : 'text-[#D1D5DB] hover:bg-[#10B981]/10 hover:text-[#FBBF24]'
//                   }`}
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </Link>
//             ))}
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white p-2"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.route}
//                 onClick={() => {
//                   setCurrentPage(item.id);
//                   setIsOpen(false);
//                 }}
//                 className={`w-full px-3 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200
//                   ${currentPage === item.id 
//                     ? 'bg-[#10B981] text-white' 
//                     : 'text-[#D1D5DB] hover:bg-[#10B981]/10 hover:text-[#FBBF24]'
//                   }`}
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };


// import { useState } from "react";
// import { Menu } from "lucide-react";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { logo } from "../assets";

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems: { name: string; href: string }[] = [
//     { name: "Nosotros", href: "/" },
//     { name: "Beneficios", href: "/benefits" },
//     { name: "Subsidios", href: "/subsidios" },
//     { name: "Servicios", href: "/services" },
//     { name: "Contacto", href: "/contact" },
//   ];

//   const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
//     href,
//     children,
//   }) => {
//     const isActive = location.pathname === href;
//     return (
//       <Link
//         to={href}
//         className={`transition-colors duration-200 ${
//           isActive
//           ? "text-white font-bold"
//           : "text-white hover:text-gray-300"
//         }`}
//       >
//         {children}
//       </Link>
//     );
//   };

//   return (
// <div className="w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl">
//       {/* Main Navbar */}
//       <header className="w-full md:w-[85%] max-h-20 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/inicio">
//             <img
//               src={logo}
//               alt="Logo"
//               width={160}
//               height={40}
//               className="object-contain"
//             />
//           </Link>
//         </div>
//         {/* Navigation Links */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-6">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <div className="bg-[#E8A598] rounded-2xl pl-2 pr-2 " >
//                 <NavLink href={item.href}>{item.name}</NavLink>
//             </div>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* Hamburger Menu */}
//         <button
//           className="md:hidden flex items-center justify-center"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <Menu size={24} />
//         </button>
//       </header>

//       {/* CTA Button */}
//       <button
//   className="w-full md:w-[20%] max-h-20 h-[50px] md:h-[100px] bg-[#E8A598] text-white rounded-full md:rounded-l-none md:-ml-[5%] hover:bg-red-300 transition-colors duration-200 flex items-center justify-center"
//   onClick={() => console.log("CTA Button clicked!")}
// >
//   <span className="pl-2 md:pl-6">
//     <p className="font-bold text-sm md:text-xl mb-[-10%]">Beneficios</p>
//     <i className="text-right ml-4 md:ml-16">plus</i>
//   </span>
// </button>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav className="w-full md:hidden mt-4 bg-white rounded-3xl shadow-lg p-4 absolute top-[90px] z-50">
//           <ul className="space-y-4">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <NavLink href={item.href}>{item.name}</NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };


import { useState } from "react";
import { Menu } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import amosebalogo  from "../assets/amosebalogo.png";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: { name: string; href: string }[] = [
    { name: "Nosotros", href: "/home" },
    { name: "Beneficios", href: "/benefits" },
    { name: "Subsidios", href: "/subsidios" },
    { name: "Servicios", href: "/services" },
    { name: "Contacto", href: "/contact" },
    { name: "Beneficios Plus", href: "/beneficios-plus" }, // Nuevo ítem en el menú
  ];

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => {
    const isActive = location.pathname === href;
    return (
      <Link
        to={href}
        className={`transition-colors duration-200 ${
          isActive
            ? "text-white font-bold"
            : "text-white hover:text-gray-300"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl px-4">
      {/* Main Navbar */}
      <header className="w-full md:w-[85%] max-h-20 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
        {/* Logo */}
        <div className="flex items-center w-40 md:w-64 ml-4 md:ml-20">
          <Link to="/">
            <img
              src={amosebalogo}
              alt="Logo"
              className="object-contain w-full"
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4 lg:space-x-6">
            {navItems.slice(0, -1).map((item) => ( // Excluye "Beneficios Plus" en pantallas grandes
              <li key={item.name}>
                <div className="bg-[#E8A598]/70 rounded-2xl px-2 py-1">
                  <NavLink href={item.href}>{item.name}</NavLink>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        {/* Hamburger Menu */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} className="text-[#E8A598]" />
        </button>
      </header>

      {/* CTA Button (solo visible en pantallas grandes) */}
      <button
        className="hidden md:flex w-full md:w-[20%] max-h-20 h-[50px] md:h-[100px] bg-[#E8A598] text-white rounded-full md:rounded-l-none md:-ml-[5%] hover:bg-red-300 transition-colors duration-200 items-center justify-center"
        onClick={() => console.log("CTA Button clicked!")}
      >
        <span className="pl-2 md:pl-6">
          <p className="font-bold text-sm md:text-xl mb-[-10%]">Beneficios</p>
          <i className="text-right ml-4 md:ml-16">plus</i>
        </span>
      </button>

      {/* Mobile Menu (incluye "Beneficios Plus" como ítem del menú) */}
      {isMenuOpen && (
        <nav className="w-full md:hidden mt-6 bg-white rounded-3xl shadow-lg p-4 absolute top-[90px] z-50">
          <ul className="space-y-4">
            {navItems.map((item) => ( // Incluye "Beneficios Plus" en el menú móvil
              <li key={item.name}>
                <div className="bg-[#E8A598] rounded-2xl px-2 py-1">
                  <NavLink href={item.href}>{item.name}</NavLink>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};



// import { useState } from "react";
// import { Menu } from "lucide-react";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { amosebalogo, logo, logoamo } from "../assets";

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems: { name: string; href: string }[] = [
//     { name: "Nosotros", href: "/" },
//     { name: "Beneficios", href: "/benefits" },
//     { name: "Subsidios", href: "/subsidios" },
//     { name: "Servicios", href: "/services" },
//     { name: "Contacto", href: "/contact" },
//     { name: "Beneficios Plus", href: "/beneficios-plus" },
//   ];

//   const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
//     href,
//     children,
//   }) => {
//     const isActive = location.pathname === href;
//     return (
//       <Link
//         to={href}
//         className={`transition-colors duration-200 ${
//           isActive
//             ? "text-white font-bold"
//             : "text-white hover:text-gray-300"
//         }`}
//       >
//         {children}
//       </Link>
//     );
//   };

//   return (
//     <div className="w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl">
//       {/* Main Navbar */}
//       <header className="w-full md:w-[85%] max-h-20 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
//         {/* Logo and Text */}
//         <div className="flex items-center space-x-4 md:space-x-6">
//           <Link to="/inicio" className="flex items-center">
//             <img
//               src={logoamo}
//               alt="Logo"
//               className="md:h-16"
//             />
//             <span
//               className="text-[#A39F73] text-lg md:text-xl font-semibold pl-2"
//               // style={{ whiteSpace: "nowrap" }}
//             >
//               AMOSEBA
//             </span>
//           </Link>
//         </div>
//         {/* Navigation Links */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-6">
//             {navItems.slice(0, -1).map((item) => (
//               <li key={item.name}>
//                 <div className="bg-[#E8A598] rounded-2xl pl-2 pr-2">
//                   <NavLink href={item.href}>{item.name}</NavLink>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* Hamburger Menu */}
//         <button
//           className="md:hidden flex items-center justify-center"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <Menu size={24} />
//         </button>
//       </header>

//       {/* CTA Button */}
//       <button
//         className="hidden md:flex w-full md:w-[20%] max-h-20 h-[50px] md:h-[100px] bg-[#E8A598] text-white rounded-full md:rounded-l-none md:-ml-[5%] hover:bg-red-300 transition-colors duration-200 items-center justify-center"
//         onClick={() => console.log("CTA Button clicked!")}
//       >
//         <span className="pl-2 md:pl-6">
//           <p className="font-bold text-sm md:text-xl mb-[-10%]">Beneficios</p>
//           <i className="text-right ml-4 md:ml-16">plus</i>
//         </span>
//       </button>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav className="w-full md:hidden mt-4 bg-white rounded-3xl shadow-lg p-4 absolute top-[90px] z-50">
//           <ul className="space-y-4">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <div className="bg-[#E8A598] rounded-2xl pl-2 pr-2">
//                   <NavLink href={item.href}>{item.name}</NavLink>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };
