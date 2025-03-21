'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const roles = ['Développeur Mobile', 'Développeur Web'];

const Home = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-12 md:py-24 bg-[#0b0f19] text-white"
        >
            {/* Texte animé */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:w-1/2 space-y-4 md:space-y-6 mt-8 md:mt-0 text-center md:text-left"
            >
                <h2 className="text-2xl md:text-4xl font-light text-gray-400">Salut, je suis</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-white">ADJAHOTO</h1>
                <h2 className="text-4xl md:text-6xl font-bold text-white">Jean Bénisse</h2>
                <div className="flex text-3xl md:text-6xl font-semibold justify-center md:justify-start">
                    <span className="text-gray-300 mr-3">un</span>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={roleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="text-[#FF4500]"
                        >
                            {roles[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
                {/* Icônes sociales */}
                <div className="flex space-x-4 mt-8 md:mt-12 text-[#FF4500] justify-center md:justify-start">
                    {[FaFacebook, FaTiktok, FaInstagram, FaLinkedin, FaGithub].map((Icon, index) => (
                        <motion.a
                            key={index}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-[#FF4500] rounded-full cursor-pointer text-xl md:text-2xl"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Avatar et cercles animés */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex justify-center items-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] my-8 md:my-0"
            >
                <img
                    src="image/dev.jpeg"
                    alt="Développeur"
                    className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-full relative z-10"
                />

                {/* Cercles animés */}
                <motion.div
                    className="absolute border border-[#FF4500] rounded-full"
                    style={{ width: '16rem', height: '16rem' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute border border-[#FF4500] rounded-full"
                    style={{ width: '20rem', height: '20rem' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Icônes qui gravitent */}
                <motion.div
                    className="absolute w-full h-full flex justify-center items-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                    <img
                        src="/image/html.jpeg"
                        alt="HTML"
                        className="absolute top-0 w-10 h-10 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-orange-500"
                    />
                    <img
                        src="/image/css.jpeg"
                        alt="CSS"
                        className="absolute right-0 w-10 h-10 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-orange-500"
                    />
                    <img
                        src="/image/js.jpeg"
                        alt="JavaScript"
                        className="absolute bottom-0 w-10 h-10 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-orange-500"
                    />
                    <img
                        src="/image/github.jpeg"
                        alt="Github"
                        className="absolute left-0 w-10 h-10 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-orange-500"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;