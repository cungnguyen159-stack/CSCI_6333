import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#f2f2f2" : "#222",
        transition: "all 0.3s ease",
      }}
    >
      <h2>🌗 Theme Switcher</h2>
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#333" : "#ddd",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
