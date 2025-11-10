import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if unmounted
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      console.log("Cleanup previous fetch");
      isMounted = false;
    };
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;
  if (!user) return <p>No user data available</p>;

  return (
    <div
      style={{
        marginTop: "20px",
        border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
        padding: "15px",
        borderRadius: "8px",
        width: "300px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <h3>{user.name}</h3>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
};

export default UserProfile;
