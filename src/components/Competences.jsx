import { motion } from "framer-motion";
import React, { useState } from "react";

// Déclaration des compétences avec leurs images
const skillsData = {
    Frontend: [
        { name: "React", image: "/image/react.jpeg" },
        { name: "Next.js", image: "/image/next.jpeg" },
        { name: "Vue.js", image: "/image/vue.jpeg" },
        { name: "JavaScript", image: "/image/js.jpeg" },
        { name: "Tailwind CSS", image: "/image/tailwind.jpeg" },
        { name: "HTML5", image: "/image/html.jpeg" },
        { name: "CSS3", image: "/image/css.jpeg" },
    ],
    Backend: [
        { name: "MYSQL", image: "/image/mysql.jpeg" },
        { name: "Firebase", image: "/image/firebase.jpeg" },
    ],
    Tools: [
        { name: "Git", image: "/image/git.png" },
        { name: "Github", image: "/image/github.jpeg" }
    ],
    Mobile: [
        { name: "React Native", image: "/image/react_native.jpeg" },
        { name: "Flutter", image: "/image/flutter.jpeg" },
    ],
};

const Competences = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <motion.section 
            id="competences"  
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="bg-[#0b0f19] text-white py-11 "
        >
            <div className="max-w-7xl py-12 mx-auto text-center min-h-[800px]">
                <h2 className="text-3xl font-bold text-orange-600">Technical Skills</h2>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mt-6 border-b border-gray-700 pb-4">
                    {Object.keys(skillsData).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 rounded-md font-medium transition-all ${
                                activeTab === category
                                    ? "bg-white text-black shadow-md"
                                    : "text-gray-400 hover:text-orange-600"
                                    
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 ">
                    {skillsData[activeTab].map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-[#1a1f2e] border border-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform hover:bg-gray-500 "
                        >
                            <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-2" />
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Competences;
