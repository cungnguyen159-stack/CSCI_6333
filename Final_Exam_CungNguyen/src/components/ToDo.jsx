import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, completeTodo } from "../redux/todoActions";

export default function Todo() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState({});

  const todos = useSelector((state) => state.todo.todos);
  const completed = useSelector((state) => state.todo.completed);
  const dispatch = useDispatch();

  const handleComplete = (index) => {
    if (!checked[index]) {
      alert("Please check the box before completing the task");
      return;
    }

    dispatch(completeTodo(index));

    setChecked((prev) => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  return (
    <div className="card p-4">
      <h2>Todo List (Redux)</h2>

      <div className="input-group mb-3">
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!text.trim()) return;
            dispatch(addTodo(text));
            setText("");
          }}
        >
          Add
        </button>
      </div>

      <h4>Tasks</h4>
      <ul className="list-group mb-4">
        {todos.map((t, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <input
                type="checkbox"
                className="me-2"
                checked={!!checked[index]}
                onChange={(e) =>
                  setChecked({ ...checked, [index]: e.target.checked })
                }
              />
              {t}
            </div>

            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => handleComplete(index)}
              >
                Complete
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(deleteTodo(index))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h4>Completed Tasks</h4>
      <ul className="list-group">
        {completed.map((t, i) => (
          <li key={i} className="list-group-item text-success fw-bold">
            ✔ {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
