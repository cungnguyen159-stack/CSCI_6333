import React, { useContext } from "react";
import useLocalStorage from "./useLocalStorage";
import { ThemeContext } from "./ThemeContext";

function NameSaver() {
  const [name, setName] = useLocalStorage("name", "");
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "8px",
        border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
        width: "300px",
      }}
    >
      <h2>Save Your Name</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{
          padding: "8px",
          width: "200px",
          marginRight: "10px",
          backgroundColor: theme === "light" ? "#fff" : "#555",
          color: theme === "light" ? "#000" : "#fff",
          border: theme === "light" ? "1px solid #ccc" : "1px solid #666",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={() => setName("")}
        style={{
          background: theme === "light" ? "lightcoral" : "#e57373",
          color: "white",
          border: "none",
          padding: "8px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clear
      </button>

      <p style={{ marginTop: "10px" }}>
        {name ? `Hello, ${name}!` : "No name saved yet."}
      </p>
    </div>
  );
}

export default NameSaver;
