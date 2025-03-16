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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="bg-[#0b0f19] text-white py-11"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center min-h-[800px]">
                <h2 className="text-3xl font-bold text-orange-600">Technical Skills</h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 border-b border-gray-700 pb-4">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                    {skillsData[activeTab].map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col items-center justify-center bg-[#1a1f2e] border border-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform hover:bg-gray-500"
                        >
                            <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-2" />
                            <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Competences;