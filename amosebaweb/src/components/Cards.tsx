import React from "react";
import { card1, card2, card3 } from "../assets/index";
import { Link } from "react-router-dom";

export const Cards: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-12 sm:gap-12 p-6 sm:p-12 lg:p-24">
      {/* Card 1 */}
      <div className="w-full sm:w-[48%] lg:w-[28%] relative rounded-3xl shadow-md overflow-hidden bg-gray-200">
        <img
          src={card1}
          alt="Card 1"
          className="w-full h-48 sm:h-56 object-cover rounded-lg"
        />
        <h1 className="absolute bottom-4 left-4 text-gray-600 text-xl sm:text-2xl md:text-3xl font-extrabold">
          SUBSIDIOS
        </h1>
        {/* Botón Redondo */}
        <Link to='/Amoseba-web/subsidios'>
        <button className="absolute bottom-4 right-4 bg-[#EEA987] text-white rounded-full p-3 shadow-lg hover:bg-[#ff8548] transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </button>
            </Link>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-[48%] lg:w-[28%] relative rounded-3xl shadow-md overflow-hidden bg-gray-200">
        <img
          src={card2}
          alt="Card 2"
          className="w-full h-48 sm:h-56 object-cover rounded-lg"
        />
        <h1 className="absolute bottom-4 left-4 text-gray-600 text-xl sm:text-2xl md:text-3xl font-extrabold">
          BENEFICIOS
        </h1>
        {/* Botón Redondo */}
        <Link to='/Amoseba-web/benefits'>
        <button className="absolute bottom-4 right-4 bg-[#EEA987] text-white rounded-full p-3 shadow-lg hover:bg-[#ff8548] transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </button>
            </Link>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-[48%] lg:w-[28%] relative rounded-3xl shadow-md overflow-hidden bg-gray-200">
        <img
          src={card3}
          alt="Card 3"
          className="w-full h-48 sm:h-56 object-cover rounded-lg"
        />
        <h1 className="absolute bottom-4 left-4 text-gray-600 text-xl sm:text-2xl md:text-3xl font-extrabold">
          SERVICIOS
        </h1>
        {/* Botón Redondo */}
        <Link to='/Amoseba-Web/services'>
        <button className="absolute bottom-4 right-4 bg-[#EEA987] text-white rounded-full p-3 shadow-lg hover:bg-[#ff8548] transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </button>
            </Link>
      </div>
    </div>
  );
};
