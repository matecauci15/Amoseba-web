// import  { useEffect, useState } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Footer } from './components/Footer';
// // import { Home } from './pages/Home.js';
// import { About } from './pages/About.js';
// import { Benefits } from './pages/Benefits.js';
// import { Contact } from './pages/Contact.js';
// import { Services } from './pages/Services.js';
// import { ArrowUp } from 'lucide-react';
// import { WhapButton } from './components/whapButton';
// import { HomePage } from './pages/HomePage';
// import amoseba from '../public/amoseba.gif';
// // import Banner  from './components/Banner';

// // import ScrollTransition from "./components/ScrollTransition";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       setIsVisible(window.pageYOffset > 200);
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

// useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 2000);
// });


//   return (
//     <button
//       onClick={scrollToTop}
//       className={`fixed bottom-24 right-[25px] bg-[#10B981] p-3 rounded-full shadow-lg 
//         transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//     >
//       <ArrowUp className="text-white" />
//     </button>
//   );
// };

// const App = () => {
//   const location = useLocation();
//   const [currentPage, setCurrentPage] = useState('');

//   useEffect(() => {
//     const pathToPage: { [key: string]: string } = {
//       '/': 'inicio',
//       '/about': 'nosotros',
//       '/services': 'servicios',
//       '/benefits': 'beneficios',
//       '/contact': 'contacto',
//     };
//     setCurrentPage(pathToPage[location.pathname as string] || 'inicio');
//   }, [location]);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#CAC792]">
//       <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       {/* <Banner/>*/}
//       {/* <ScrollTransition /> */}
//       <div className="flex-grow">
//         <Routes>
//         <Route path="/Amoseba-web" element={<HomePage />} />
//           {/* <Route path="/Amoseba-web/home" element={<Home />} /> */}
//           <Route path="/Amoseba-web/about" element={<About />} />
//           <Route path="/Amoseba-web/benefits" element={<Benefits />} />
//           <Route path="/Amoseba-web/contact" element={<Contact />} />
//           <Route path="/Amoseba-web/services" element={<Services />} />
//         </Routes>
//         <ScrollToTop/>
//         <WhapButton />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;


import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './pages/About.js';
import { Benefits } from './pages/Benefits.js';
import { Contact } from './pages/Contact.js';
import { Services } from './pages/Services.js';
import { ArrowUp } from 'lucide-react';
import { WhapButton } from './components/whapButton';
import { HomePage } from './pages/HomePage';
import logo from '../public/logo.gif';
import { Subsidies } from './pages/Subsidies.js';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-[23px] bg-[#10B981] p-3 rounded-full shadow-lg 
        transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <ArrowUp className="text-white" />
    </button>
  );
};

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fff] z-50">
      <img src={logo} alt="Loading..." className="w-56 h-56" />
      <p>Cargando...</p>
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar el loader

  // Simular la carga de la aplicación
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Desactiva el loader después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpia el timer al desmontar el componente
  }, []);

  // Actualizar la página actual según la ruta
  useEffect(() => {
    const pathToPage: { [key: string]: string } = {
      '/': 'inicio',
      '/about': 'nosotros',
      '/services': 'servicios',
      '/benefits': 'beneficios',
      '/contact': 'contacto',
    };
    setCurrentPage(pathToPage[location.pathname as string] || 'inicio');
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-[#CAC792]">
      {/* Mostrar el loader mientras isLoading sea true */}
      {isLoading && <Loader />}

      {/* Contenido principal */}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex-grow">
          <Routes>
            <Route path="/Amoseba-web" element={<HomePage />} />
            <Route path="/Amoseba-web/about" element={<About />} />
            <Route path="/Amoseba-web/benefits" element={<Benefits />} />
            <Route path="/Amoseba-web/contact" element={<Contact />} />
            <Route path="/Amoseba-web/services" element={<Services />} />
            <Route path="/Amoseba-web/subsidios" element={<Subsidies />} />
          </Routes>
          <ScrollToTop />
          <WhapButton />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;