import React from 'react';
import { motion } from 'framer-motion'; 

const About = () => {
    return (
        <motion.section 
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="scroll-mt-20 bg-[#0b0f19] text-white py-16"
        >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-2 gap-20">
                
                {/* Conteneur de l'image avec le cercle animé */}
                <div className="relative flex items-center justify-center w-80 h-80">
                    
                    {/* Cercle animé SVG */}
                    <motion.svg
                        className="absolute"
                        width="420" height="420" viewBox="0 0 360 360"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <circle
                            cx="180" cy="180" r="170"
                            stroke="orange"
                            strokeWidth="4"
                            strokeDasharray="40 20 10 30"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </motion.svg>

                    {/* Image avec bordure */}
                    <div className="relative w-72 h-72 md:w-80 md:h-80 flex-shrink-0">
                        <motion.img 
                            src="/image/profil.jpg" 
                            alt="Profil" 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-full h-full object-cover rounded-full border-4 border-orange-500 p-2"
                        />
                    </div>
                </div>

                {/* Texte */}
                <div className="md:ml-12 text-center md:text-left mt-6 md:mt-0 max-w-3xl ">
                    <h2 className="text-4xl font-bold text-orange-500 mt-12 w-35">À propos de moi</h2>
                    <p className="text-lg font-semibold mt-4 py-2 ">
                        Je m'appelle <span className="text-orange-400">ADJAHOTO Jean Bénisse</span> et je suis actuellement étudiant
                        en <span className='text-orange-400'>Génie logiciel</span> à l'IFRI (Institut de Formation et Recherche en Informatique).
                    </p>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                        En parallèle de mes études, je suis également développeur passionné, spécialisé dans le développement Web et Mobile.
                        Au cours de mon parcours académique, j'ai acquis une solide compréhension des concepts de base et avancés de 
                        Génie logiciel, et j'ai eu l'opportunité de travailler sur divers projets qui m'ont permis d'acquérir et de mettre en pratique mes compétences.
                    </p>
                    <p className="text-gray-300 mt-4">
                        Ce site est mon site web personnel où je publie les projets que je réalise. Je suis toujours ouvert à de nouvelles opportunités et collaborations,
                        n'hésitez pas à me contacter.
                    </p>

                    {/* Bouton WhatsApp */}
                    <div className="mt-8 flex justify-center md:justify-start">
                        <motion.a 
                            href="https://wa.me/22967152424" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-orange-500 text-white font-bold px-6 py-3 w-48 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-600 transition"
                        >
                            <span className="font-bold">WhatsApp</span>
                            <img src="/image/whatsaap.jpeg" alt="WhatsApp" className="w-5 h-5" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.section> 
    );
};

export default About;
