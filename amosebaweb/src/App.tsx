import  { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Benefits } from './pages/Benefits.js';
import { Contact } from './pages/Contact.js';
import { Services } from './pages/Services.js';
import { ArrowUp } from 'lucide-react';
import { WhapButton } from './components/whapButton';
import { HomePage } from './pages/HomePage';
// import Banner  from './components/Banner';

// import ScrollTransition from "./components/ScrollTransition";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 200); // Aparece al hacer scroll 200px
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
      className={`fixed bottom-24 right-[25px] bg-[#10B981] p-3 rounded-full shadow-lg 
        transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <ArrowUp className="text-white" />
    </button>
  );
};

const App = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

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
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* <Banner/>*/}
      {/* <ScrollTransition /> */}
      <div className="flex-grow">
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <ScrollToTop/>
        <WhapButton />
      </div>
      <Footer />
    </div>
  );
};

export default App;
