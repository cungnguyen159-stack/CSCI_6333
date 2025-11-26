import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/AddCart";
import Todo from "./components/ToDo";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}
