import React, { useState, useContext } from "react";
import ChatWindow from "./ChatWindow";
import { ThemeContext } from "./ThemeContext";

// Parent component (Simulating chat input)
const UseRef = () => {
  const [messages, setMessages] = useState(["Hi there", "Welcome to the chat!"]);
  const [newMessage, setNewMessage] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages((prev) => [...prev, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "8px",
        border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
      }}
    >
      <h2>useRef + useEffect Example - Chat Window Auto Scroll</h2>

      <ChatWindow messages={messages} />

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            padding: "8px",
            width: "220px",
            marginRight: "8px",
            borderRadius: "4px",
            border: theme === "light" ? "1px solid #ccc" : "1px solid #666",
            backgroundColor: theme === "light" ? "#fff" : "#555",
            color: theme === "light" ? "#000" : "#fff",
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: theme === "light" ? "#007bff" : "#3399ff",
            color: "#fff",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default UseRef;
