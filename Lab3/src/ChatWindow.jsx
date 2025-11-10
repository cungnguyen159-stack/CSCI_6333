import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Child component (Chat Window)
const ChatWindow = ({ messages }) => {
  const bottomRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  // Automatically scroll to the bottom whenever new messages are added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="chat-container"
      style={{
        height: "200px",
        width: "300px",
        border: theme === "light" ? "2px solid #ccc" : "2px solid #555",
        borderRadius: "8px",
        overflowY: "auto",
        padding: "10px",
        backgroundColor: theme === "light" ? "#f8f8f8" : "#444",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      {messages.map((msg, i) => (
        <p
          key={i}
          style={{
            background: theme === "light" ? "#e3f2fd" : "#555",
            padding: "6px 10px",
            borderRadius: "5px",
            marginBottom: "6px",
          }}
        >
          {msg}
        </p>
      ))}
      {/* This invisible div is used as the scroll target */}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ChatWindow;
