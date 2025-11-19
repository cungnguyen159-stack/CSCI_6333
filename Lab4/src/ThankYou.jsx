import React from "react";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const name = location.state?.name || "Guest";
  return (
    <div>
      <h2>Thank You, {name}!</h2>
      <p>Your message has been received.</p>
    </div>
  );
};

export default ThankYou;
