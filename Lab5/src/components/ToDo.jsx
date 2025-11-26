import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../redux/actions/todoActions";

export default function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "auto",
        border: "1px solid #ddd",
        padding: "40px",
        borderRadius: "12px",
      }}
    >
      <h1>Todo List (Redux)</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul style={{ marginTop: "30px" }}>
        {todos.map((t, index) => (
          <li key={index} style={{ marginBottom: "10px", fontSize: "20px" }}>
            {t}{" "}
            <button
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 10px",
                marginLeft: "10px",
                cursor: "pointer",
                borderRadius: "6px",
              }}
              onClick={() => dispatch(deleteTodo(index))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
