import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyle = ({ isActive }) => ({
    marginRight: 10,
    textDecoration: "none",
    color: isActive ? "blue" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav style={{ padding: 10, borderBottom: "1px solid gray" }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      <NavLink to="/feedback" style={linkStyle}>Feedback</NavLink>
      <NavLink to="/account/profile" style={linkStyle}>Account→Profile</NavLink>
      <NavLink to="/account/settings" style={linkStyle}>Account→Settings</NavLink>
    </nav>
  );
};

export default NavBar;
