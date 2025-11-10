import React, { useReducer, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// ✅ Step 1: Define initial state
const initialState = {
  email: "",
  password: "",
  loading: false,
  message: "",
};

// ✅ Step 2: Reducer function to handle all state transitions
function reducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

// ✅ Step 3: Component using useReducer and ThemeContext
const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme } = useContext(ThemeContext);

  const handleLogin = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_MESSAGE", payload: "" });

    // fake async request
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
      if (state.email === "admin@example.com" && state.password === "1234") {
        dispatch({ type: "SET_MESSAGE", payload: "✅ Login successful!" });
      } else {
        dispatch({
          type: "SET_MESSAGE",
          payload: "❌ Invalid email or password.",
        });
      }
    }, 1500);
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 300,
        margin: "50px auto",
        borderRadius: 8,
        fontFamily: "Arial",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
      }}
    >
      <h3 style={{ textAlign: "center" }}>🔐 Login Form (useReducer)</h3>

      <input
        type="email"
        value={state.email}
        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
        placeholder="Email"
        style={{
          width: "100%",
          marginBottom: 10,
          padding: 8,
          borderRadius: 4,
          border: theme === "light" ? "1px solid #ccc" : "1px solid #666",
          backgroundColor: theme === "light" ? "#fff" : "#555",
          color: theme === "light" ? "#000" : "#fff",
        }}
      />

      <input
        type="password"
        value={state.password}
        onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
        placeholder="Password"
        style={{
          width: "100%",
          marginBottom: 10,
          padding: 8,
          borderRadius: 4,
          border: theme === "light" ? "1px solid #ccc" : "1px solid #666",
          backgroundColor: theme === "light" ? "#fff" : "#555",
          color: theme === "light" ? "#000" : "#fff",
        }}
      />

      <button
        onClick={handleLogin}
        disabled={state.loading}
        style={{
          width: "100%",
          padding: 8,
          backgroundColor: state.loading
            ? "#888"
            : theme === "light"
            ? "#007bff"
            : "#3399ff",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        {state.loading ? "Logging in..." : "Login"}
      </button>

      {state.message && (
        <p style={{ textAlign: "center", marginTop: 10 }}>{state.message}</p>
      )}
    </div>
  );
};

export default LoginForm;
