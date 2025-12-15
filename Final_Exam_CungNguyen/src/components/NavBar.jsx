import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 mb-4">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/redux">Redux Example</NavLink>
        <NavLink className="nav-link" to="/crud">CRUD Operations</NavLink>
        <NavLink className="nav-link" to="/gallery">Photo Gallery</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
