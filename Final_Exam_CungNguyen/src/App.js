import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import ReduxExample from "./pages/ReduxExample";
import CrudPage from "./pages/CrudPage";
import PhotoGallery from "./pages/PhotoGallery";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redux" element={<ReduxExample />} />
          <Route path="/crud" element={<CrudPage />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </div>
  );
}
