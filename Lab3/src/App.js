// App.js
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";
import UseMemo from "./UseMemo";
import TodoList from "./TodoList";
import UserProfile from "./UserProfile";
import UseRef from "./UseRef";
import LoginForm from "./LoginForm";
import SearchApp from "./SearchApp";
import NameSaver from "./NameSaver";
import MyButton from "./MyButton";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [userId, setUserId] = useState(1);

  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice Hooks" },
    { id: 3, text: "Build a Project" },
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          transition: "all 0.3s ease",
          padding: "20px",
          fontFamily: "Arial",
        }}
      >
        <Navbar />
        <h2>UseMemo Example</h2>
        <UseMemo />
        <h2>UseCallback Example</h2>
        <TodoList initialTodos={todos} />
        <div>
          <h2>useEffect Example</h2>
          <label htmlFor="userIdInput">Enter User ID (1–10): </label>
          <input
            id="userIdInput"
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{
              padding: "5px",
              marginRight: "10px",
              width: "60px",
              backgroundColor: theme === "light" ? "#fff" : "#555",
              color: theme === "light" ? "#000" : "#fff",
              border: `1px solid ${theme === "light" ? "#ccc" : "#888"}`,
            }}
          />
          <UserProfile userId={userId} />
        </div>
        <h2>useRef Example</h2>
        <SearchApp />
        <h2>useLocalStorage Example</h2>
        <NameSaver />
        <h2>useRef with DOM Example</h2>
        <UseRef />
        <h2>useReducer Example</h2>
        <LoginForm />
        <h2>this keyword Example</h2>
        <MyButton />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
