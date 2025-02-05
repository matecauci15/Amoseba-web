import React from "react";
import { Link } from "react-router-dom";

export const WhapButton: React.FC = () => {
  return (
    <Link
      to="https://wa.me/5491130230633"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:-translate-y-1 animate-bounce"  
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Contact us on WhatsApp"
        className="w-8 h-8"
        />
    </Link>
  );
};