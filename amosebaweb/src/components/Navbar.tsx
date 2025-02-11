// import { useState, useEffect, useRef } from "react";
// import { Menu, X } from "lucide-react";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import amosebalogo from "../assets/amosebalogo.png";

// export const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const menuRef = useRef<HTMLDivElement>(null);

//   const navItems: { name: string; href: string }[] = [
//     { name: "Nosotros", href: "/Amoseba-web/about" },
//     { name: "Beneficios", href: "/Amoseba-web/benefits" },
//     { name: "Subsidios", href: "/Amoseba-web/subsidios" },
//     { name: "Servicios", href: "/Amoseba-web/services" },
//     { name: "Contacto", href: "/Amoseba-web/contact" },
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
//     <div className="w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl px-4">
//       {/* Main Navbar */}
//       <header className="w-full md:w-[85%] max-h-20 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
//         {/* Logo */}
//         <div className="flex md:w-56 md:max-w-56 md:ml-10 w-40">
//           <Link to="/Amoseba-web">
//             <img
//               src={amosebalogo}
//               alt="Logo"
//               className="object-contain w-full"
//             />
//           </Link>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden md:flex">
//           <ul className="flex space-x-1 lg:space-x-6 w-auto h-auto">
//             {navItems.slice(0, -1).map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.href}
//                   className={`text-white w-full h-7 bg-[#E8A598]/70 rounded-xl px-3 py-1.5 hover:bg-[#E8A598]/90 transition-colors duration-200 flex items-center justify-center ${
//                     location.pathname === item.href ? "font-bold" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Hamburger Menu (Mobile) */}
//         <button
//           className="md:hidden flex items-center justify-center p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <X size={24} className="text-[#E8A598] transition-transform duration-200" />
//           ) : (
//             <Menu size={24} className="text-[#E8A598] transition-transform duration-200" />
//           )}
//         </button>
//       </header>

//       {/* CTA Button (Desktop) */}
//       <a
//         href="https://amosebaplus.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hidden md:flex w-full md:w-[20%] max-h-20 h-[50px] md:h-[100px] bg-[#E8A598] text-white rounded-full md:rounded-l-none md:-ml-[5%] hover:bg-red-300 transition-colors duration-200 items-center justify-center"
//       >
//         <span className="pl-2 md:pl-6">
//           <p className="font-bold text-sm md:text-xl mb-[-10%]">Beneficios</p>
//           <i className="text-right ml-4 md:ml-16">plus</i>
//         </span>
//       </a>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav
//           ref={menuRef}
//           className="w-11/12 md:hidden mt-7 bg-white rounded-3xl text-center text-white shadow-lg p-6 absolute top-[90px] z-50 left-1/2 transform -translate-x-1/2"
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
import { Menu, X } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import amosebalogo from "../assets/amosebalogo.png";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems: { name: string; href: string }[] = [
    { name: "Nosotros", href: "/Amoseba-web/about" },
    { name: "Beneficios", href: "/Amoseba-web/benefits" },
    { name: "Subsidios", href: "/Amoseba-web/subsidios" },
    { name: "Servicios", href: "/Amoseba-web/services" },
    { name: "Contacto", href: "/Amoseba-web/contact" },
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
    <div className="w-full flex flex-col md:flex-row items-center md:items-stretch mt-10 mx-auto max-w-7xl px-4">
      {/* Main Navbar */}
      <header className="w-full md:w-[85%] max-h-20 h-[80px] md:h-[100px] bg-white rounded-full shadow-lg flex items-center justify-between px-6 md:px-8 z-10 relative">
        {/* Logo */}
        <div className="flex md:w-64 md:max-w-64 md:ml-10 w-48 sm:w-56">
          <Link to="/Amoseba-web">
            <img
              src={amosebalogo}
              alt="Logo"
              className="object-contain w-[clamp(140px,18vw,300px)] h-auto"
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
                  className={`text-white text-xs max-w-24 w-full h-7 bg-[#E8A598]/70 rounded-4xl px-3 py-1.5 hover:bg-[#E8A598]/90 transition-colors duration-200 flex items-center justify-center text-[clamp(0.85rem,1.2vw,1.1rem)] ${
                    location.pathname === item.href ? "font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
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
            <X size={28} className="text-[#E8A598] transition-transform duration-200" />
          ) : (
            <Menu size={28} className="text-[#E8A598] transition-transform duration-200" />
          )}
        </button>
      </header>

      {/* CTA Button (Desktop) */}
      <a
        href="https://amosebaplus.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex w-full md:w-[20%] max-h-20 h-[50px] md:h-[100px] bg-[#E8A598] text-white rounded-full md:rounded-l-none md:-ml-[5%] hover:bg-red-300 transition-colors duration-200 items-center justify-center"
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
          className="w-11/12 md:hidden mt-7 bg-white rounded-3xl text-center text-white shadow-lg p-6 absolute top-[90px] z-50 left-1/2 transform -translate-x-1/2"
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
