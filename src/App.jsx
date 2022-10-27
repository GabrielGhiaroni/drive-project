import React from "react";
import Encontre from "./components/Encontre/Encontre";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Luxo from "./components/Luxo/Luxo";
import Motorista from "./components/Motorista/Motorista";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Encontre />
      <Motorista />
      <Luxo />
      <Footer />
    </div>
  );
}

export default App;
