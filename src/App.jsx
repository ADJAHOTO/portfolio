import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Competences from "./components/Competences";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
      {/* Navbar fixe en haut de la page */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19] shadow-lg">
        <Navbar />
      </div>

      {/* Contenu de la page avec une marge en haut pour éviter que le Navbar ne masque le contenu */}
      <div className="pt-16"> {/* Ajustez cette valeur en fonction de la hauteur de votre Navbar */}
        <Home />
        <Competences />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;