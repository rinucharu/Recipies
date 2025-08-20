import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Image from "./pages/Image";
import Details from "./pages/Details";
import PNF from "./pages/PNF";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/image" element={<Image />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<PNF />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
