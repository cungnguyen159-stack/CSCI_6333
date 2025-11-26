import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      padding: "20px",
      borderBottom: "1px solid #ccc",
      marginBottom: "20px"
    }}>
      <Link to="/">Shopping Cart</Link>
      <Link to="/todo">Todo App</Link>
    </div>
  );
}
