import { useState, useEffect } from "react";
import AboutCards from "../components/AboutCards";

const images = [
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
        <div className="min-h-screen bg-gradient-to-b from-[#CAC792] to-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-montserrat font-black text-white text-center mb-10">
            Sobre Nosotros
          </h1>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-[#A39F73] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div> */}
          <AboutCards />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Carousel */}
            <div className="flex justify-center items-center w-full mt-10">
           <div className="relative w-full max-w-3xl h-60 md:h-80 overflow-hidden rounded-lg shadow-lg flex justify-center items-center">
             {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagen ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100 scale-105" : "opacity-0"
                }`}
              />
            ))}

            {/* Botones (puntitos) para cambiar imágenes */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImage ? "bg-[#A39F73] scale-110" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

            {/* Content */}
            <div className="space-y-6 ">
              <h2 className="text-3xl  font-semibold text-[#A39F73] text-center">
                AMOSEBA
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                La Asociación Mutual Obreros, Empleados de la Salud y Educación de la Ciudad de Buenos Aires nació en 2004 con una misión clara: mejorar la calidad de vida de nuestros socios.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#A39F73] rounded-full flex items-center justify-center text-white">1</div>
                  <p className="flex-1">Atención cálida, ágil y eficaz</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#A39F73] rounded-full flex items-center justify-center text-white">2</div>
                  <p className="flex-1">Servicios y beneficios de alta calidad</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#A39F73] rounded-full flex items-center justify-center text-white">3</div>
                  <p className="flex-1">Innovación y eficiencia en todas nuestras soluciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

