import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import amosebalogo from "../assets/amosebalogo.png";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems: { name: string; href: string }[] = [
    { name: "Nosotros", href: "/home" },
    { name: "Beneficios", href: "/benefits" },
    { name: "Subsidios", href: "/subsidios" },
    { name: "Servicios", href: "/services" },
    { name: "Contacto", href: "/contact" },
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

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => {
    const isActive = location.pathname === href;
    return (
      <Link
        to={href}
        className={`block w-full transition-colors duration-200 ${
          isActive ? "text-white font-bold" : "text-white hover:text-gray-300"
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
          <Link to="/Amoseba-web">
            <img
              src={amosebalogo}
              alt="Logo"
              className="object-contain w-full"
            />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4 lg:space-x-6">
            {navItems.slice(0, -1).map((item) => (
              <li key={item.name}>
                <div className="bg-[#E8A598]/70 rounded-2xl px-4 py-2 hover:bg-[#E8A598]/90 transition-colors duration-200">
                  <NavLink href={item.href}>{item.name}</NavLink>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className="text-[#E8A598] transition-transform duration-200" />
          ) : (
            <Menu size={24} className="text-[#E8A598] transition-transform duration-200" />
          )}
        </button>
      </header>

      {/* CTA Button (Desktop) */}
      <a
        href="https://amosebaplus.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:flex w-full md:w-[20%] max-h-20 h-[50px] md:h-[100px] ${
          isMenuOpen ? "bg-red-300" : "bg-[#E8A598]"
        } text-white rounded-full md:rounded-l-none md:-ml-[5%] hover:bg-red-300 transition-colors duration-200 items-center justify-center`}
      >
        <span className="pl-2 md:pl-6">
          <p className="font-bold text-sm md:text-xl mb-[-10%]">Beneficios</p>
          <i className="text-right ml-4 md:ml-16">plus</i>
        </span>
      </a>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="w-11/12 md:hidden mt-4 bg-white rounded-3xl shadow-lg p-4 absolute top-[90px] z-50 left-1/2 transform -translate-x-1/2"
        >
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <div className="bg-[#E8A598] rounded-2xl px-4 py-2 hover:bg-[#E8A598]/90 transition-colors duration-200">
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
// import amosebalogo  from "../assets/amosebalogo.png";

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems: { name: string; href: string }[] = [
//     { name: "Nosotros", href: "/home" },
//     { name: "Beneficios", href: "/benefits" },
//     { name: "Subsidios", href: "/subsidios" },
//     { name: "Servicios", href: "/services" },
//     { name: "Contacto", href: "/contact" },
//     { name: "Beneficios Plus", href: "/beneficios-plus" }, // Nuevo ítem en el menú
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
//     <div className="w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl px-4">
//       {/* Main Navbar */}
//       <header className="w-full md:w-[85%] max-h-20 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
//         {/* Logo */}
//         <div className="flex items-center w-40 md:w-64 ml-4 md:ml-20">
//           <Link to="/Amoseba-web">
//             <img
//               src={amosebalogo}
//               alt="Logo"
//               className="object-contain w-full"
//             />
//           </Link>
//         </div>
//         {/* Navigation Links */}
//         <nav className="hidden md:flex">
//           <ul className="flex space-x-4 lg:space-x-6">
//             {navItems.slice(0, -1).map((item) => ( // Excluye "Beneficios Plus" en pantallas grandes
//               <li key={item.name}>
//                 <div className="bg-[#E8A598]/70 rounded-2xl px-2 py-1">
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
//           <Menu size={24} className="text-[#E8A598]" />
//         </button>
//       </header>

//       {/* CTA Button (solo visible en pantallas grandes) */}
//       <button
//         className="hidden md:flex w-full md:w-[20%] max-h-20 h-[50px] md:h-[100px] bg-[#E8A598] text-white rounded-full md:rounded-l-none md:-ml-[5%] hover:bg-red-300 transition-colors duration-200 items-center justify-center"
//         onClick={() => console.log("CTA Button clicked!")}
//       >
//         <span className="pl-2 md:pl-6">
//           <p className="font-bold text-sm md:text-xl mb-[-10%]">Beneficios</p>
//           <i className="text-right ml-4 md:ml-16">plus</i>
//         </span>
//       </button>

//       {/* Mobile Menu (incluye "Beneficios Plus" como ítem del menú) */}
//       {isMenuOpen && (
//         <nav className="w-full md:hidden mt-6 bg-white rounded-3xl shadow-lg p-4 absolute top-[90px] z-50">
//           <ul className="space-y-4">
//             {navItems.map((item) => ( // Incluye "Beneficios Plus" en el menú móvil
//               <li key={item.name}>
//                 <div className="bg-[#E8A598] rounded-2xl px-2 py-1">
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