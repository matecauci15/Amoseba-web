import React from "react";
import { ChevronRight, Plane, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/90 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#CAC792]/20 transition-all duration-500 group-hover:scale-150" />
      
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#CAC792]/20 transition-all duration-300 group-hover:bg-[#CAC792]/30">
          <Icon className="h-7 w-7 text-[#8A8B6C] transition-all duration-300 group-hover:scale-110" />
        </div>
        
        <h3 className="mb-4 text-2xl font-bold text-gray-800">{title}</h3>
        <p className="mb-6 leading-relaxed text-gray-600">{description}</p>
        
        <Link 
        target="_blanck"
        to="https://amosebaplus.com/">
        <button 
          className="inline-flex items-center font-medium text-[#8A8B6C] transition-all duration-300 hover:text-[#6B6C54]"
          // onClick={() => console.log(`More info clicked for ${title}`)}
          >
          Más información
          <ChevronRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </button>
          </Link>
      </div>
    </div>
  );
};

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "tourism",
    icon: Plane,
    title: "Turismo",
    description: "Disfruta de viajes nacionales e internacionales con tarifas especiales. Te ofrecemos pasajes aéreos y terrestres, hoteles, cabañas y paquetes turísticos con descuentos exclusivos."
  },
  {
    id: "loans",
    icon: Briefcase,
    title: "Gestión de Préstamos",
    description: "A través de convenios con entidades mutuales, ofrecemos ayuda económica a nuestros socios. Te brindamos acceso a préstamos con condiciones favorables y sin costos ocultos."
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#CAC792] to-gray-50 py-17 ">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-montserrat font-black text-white sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            En AMOSEBA ofrecemos soluciones en turismo y préstamos para <br /> mejorar tu bienestar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      {/* <div className="mt-16 p-6 bg-gray-50 rounded-2xl max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-600">
              <h3 className="text-xl font-semibold mb-2">¿Necesitas más información?</h3>
              <p>Nuestro equipo está disponible para ayudarte con cualquier consulta.</p>
            </div>
            <button className="px-6 py-3 bg-[#A39F73] text-white rounded-xl hover:bg-[#8B864F] 
              transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contactar Ahora
            </button>
          </div>
        </div> */}
    </div>
  );
};

export default Services;