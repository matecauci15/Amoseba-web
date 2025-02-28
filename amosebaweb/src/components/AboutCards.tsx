// import { useState, useEffect } from "react";
// import { Calendar, Users, Gift, LucideIcon } from "lucide-react";

// interface StatItem {
//   icon: LucideIcon;
//   number: string;
//   label: string;
//   description: string;
// }

// const stats: StatItem[] = [
//   {
//     icon: Calendar,
//     number: "2004",
//     label: "Año de Fundación",
//     description: "Iniciando nuestro compromiso con la comunidad"
//   },
//   {
//     icon: Users,
//     number: "1000+",
//     label: "Socios Activos",
//     description: "Creciendo juntos cada día"
//   },
//   {
//     icon: Gift,
//     number: "50+",
//     label: "Beneficios",
//     description: "Servicios exclusivos para nuestros socios"
//   }
// ];

// const AboutCards: React.FC = () => {
//   const [isVisible, setIsVisible] = useState<boolean>(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const renderStatItem = (stat: StatItem, index: number): JSX.Element => {
//     const Icon = stat.icon;
    
//     return (
//       <div
//         key={index}
//         className={`transform transition-all duration-500 delay-${index * 200} 
//           ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//       >
//         <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
//           group overflow-hidden">
//           <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#A39F73]/10 rounded-full
//             group-hover:scale-150 transition-transform duration-500" />
          
//           <div className="relative z-10 text-[#A39F73] mb-4 transform group-hover:scale-110 
//             group-hover:rotate-12 transition-all duration-300">
//             <Icon size={32} />
//           </div>

//           <div className="relative z-10">
//             <div className="text-4xl font-bold text-[#A39F73] mb-2
//               transform group-hover:translate-x-2 transition-transform duration-300">
//               {stat.number}
//             </div>
//             <div className="text-xl font-semibold text-gray-700 mb-2
//               transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
//               {stat.label}
//             </div>
//             <p className="text-gray-600 text-sm
//               transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
//               {stat.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//       {stats.map((stat, index) => renderStatItem(stat, index))}
//     </div>
//   );
// };

// export default AboutCards;

import React, { useState, useEffect } from "react";
import { Calendar, Users, Gift, LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  number: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: Calendar,
    number: "2004",
    label: "Año de Fundación",
    description: "Iniciando nuestro compromiso con la comunidad"
  },
  {
    icon: Users,
    number: "1000+",
    label: "Socios Activos",
    description: "Creciendo juntos cada día"
  },
  {
    icon: Gift,
    number: "50+",
    label: "Beneficios",
    description: "Servicios exclusivos para nuestros socios"
  }
];

const AboutCards: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderStatItem = (stat: StatItem, index: number): React.ReactElement => {
    const Icon = stat.icon;
    
    return (
      <div
        key={index}
        className={`transform transition-all duration-500 delay-${index * 200} 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
          group overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#A39F73]/10 rounded-full
            group-hover:scale-150 transition-transform duration-500" />
          
          <div className="relative z-10 text-[#A39F73] mb-4 transform group-hover:scale-110 
            group-hover:rotate-12 transition-all duration-300">
            <Icon size={32} />
          </div>

          <div className="relative z-10">
            <div className="text-4xl font-bold text-[#A39F73] mb-2
              transform group-hover:translate-x-2 transition-transform duration-300">
              {stat.number}
            </div>
            <div className="text-xl font-semibold text-gray-700 mb-2
              transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
              {stat.label}
            </div>
            <p className="text-gray-600 text-sm
              transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
              {stat.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {stats.map((stat, index) => renderStatItem(stat, index))}
    </div>
  );
};

export default AboutCards;