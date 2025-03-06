import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Competences from "./components/Competences";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { body } from "framer-motion/client";

function App() {
  
 
  return (
      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
      <Navbar />
      <Home />
      <Competences />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );

}

export default App;
