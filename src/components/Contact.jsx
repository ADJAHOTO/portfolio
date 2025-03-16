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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0b0f19] text-white py-20 px-4 sm:px-8"
    >
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Contactez-moi
      </h2>

      {/* Conteneur du formulaire */}
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-gray-700 p-8 rounded-xl bg-[#11172B] shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Nom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
                required
              />
            </motion.div>

            {/* Champ Prénom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
                required
              />
            </motion.div>

            {/* Champ Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Votre adresse E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
                required
              />
            </motion.div>

            {/* Champ Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <textarea
                name="message"
                placeholder="Contenu du message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition duration-300 hover:border-orange-400"
                required
              ></textarea>
            </motion.div>

            {/* Bouton Envoyer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg transition duration-300 hover:bg-orange-600 hover:scale-105"
              >
                Envoyer
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;