import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0b0f19] text-white py-20 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-8 ">
        Contactez-moi
      </h2>

      {/* Formulaire pleine largeur avec espace autour */}
      <div className="w- px-8 md:px-20 lg:px-40 xl:px-60">
        <div className="w-full border-2 border-red-500 p-10 rounded-lg shadow-lg bg-[#11172B]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
              required
            />
            <input
              type="text"
              name="prenom"
              placeholder="Votre prénom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre adresse E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
              required
            />
            <textarea
              name="message"
              placeholder="Contenu du message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-red-500 w-full py-4 font-bold rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
