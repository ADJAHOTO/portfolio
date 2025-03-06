import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [active, setActive] = useState("Accueil");
  const menuItems = [
    { name: "Accueil", id: "home" },
    { name: "Compétences", id: "competences" },
    { name: "À propos", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" }
  ];
  
  const controls = useAnimation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Effet au scroll : réduire l'opacité
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ opacity: 0.9, transition: { duration: 0.3 } });
      } else {
        controls.start({ opacity: 1, transition: { duration: 0.3 } });
      }

      // Détection de la section active lors du scroll
      let foundActive = "Accueil"; // Valeur par défaut
      for (const section of menuItems) {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundActive = section.name;
            break;
          }
        }
      }
      setActive(foundActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, menuItems]);

  // Fonction pour scroller vers une section
  const scrollToSection = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav 
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full bg-[#0b0f19] text-white px-8 py-4 flex justify-between items-center shadow-lg z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold leading-tight">
        <span className="text-white block">ADJAHOTO</span>
        <span className="text-orange-600 text-sm block">Développeur Web et Mobile</span>
      </div>

      {/* Menu */}
      <div className="flex space-x-8 text-lg">
        {menuItems.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="relative cursor-pointer"
            onClick={() => scrollToSection(item.id)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className={active === item.name ? "text-orange-600" : "text-gray-400 hover:text-orange-600"}>
              {item.name}
            </span>
            {active === item.name && (
              <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-orange-500 w-full"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Bouton Mode Sombre/Clair */}
      <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-gray-300 cursor-pointer hover:text-white"
      >
        {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </motion.nav>
  );
};

export default Navbar;
