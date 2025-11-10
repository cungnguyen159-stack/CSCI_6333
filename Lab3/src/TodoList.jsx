import React, { useState, useCallback, memo, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// ✅ Child component (memoized to prevent unnecessary re-renders)
const TodoItem = memo(({ todo, onDelete }) => {
  console.log("Rendering:", todo.text);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "5px",
      }}
    >
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});

// ✅ Parent component using useCallback
const TodoList = ({ initialTodos }) => {
  const [items, setItems] = useState(initialTodos);
  const { theme } = useContext(ThemeContext);

  // useCallback ensures handleDelete reference is stable between renders
  const handleDelete = useCallback((id) => {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>useCallback Example - Todo List</h2>

      <div style={{ marginTop: "20px" }}>
        {items.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
