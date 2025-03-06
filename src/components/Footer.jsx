import React from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Message de fin */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">Merci pour votre visite </h3>
          <p className="text-gray-300 mt-2 font-bold">
            Je suis flatté que vous ayez visitez ce site . J'espère que mes réalisations ont retenu votre attention et vous ont inspiré.
            Si vous avez des questions ou des idées de collaboration, je serais ouvert a tous ces apports. 
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">Contact</h3>
          <p className="mt-2 mb-4 text-gray-300 font-bold">📧 benisseadjahoto@gmail.com</p>
          <p className="text-gray-300">📞 +229 01 67 15 24 24</p>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">Suivez-moi sur :</h3>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-orange-500 hover:text-white transition duration-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © Copyright 2025 | Tous droits réservés | Conçu et développé par ADJAHOTO Jean Bénisse.
      </div>
    </footer>
  );
};

export default Footer;
