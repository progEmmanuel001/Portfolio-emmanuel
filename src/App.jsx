import { Routes, Route, Navigate } from "react-router-dom";

import Background from "./components/Background.jsx";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <Background />
      <Cursor />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
