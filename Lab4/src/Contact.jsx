import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Support",
    message: "",
    contactMethod: "Email",
    bestTime: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (form.name.trim().length < 2 || form.name.trim().length > 50) newErrors.name = "Name must be greater than 2 and less than 50 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email.";
    if (form.phone && !/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits.";
    if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters.";
    if (!form.terms) newErrors.terms = "You must agree to the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstError}"]`);
      if (el) el.focus();
      return;
    }

    alert("Success!!!");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "Support",
      message: "",
      contactMethod: "Email",
      bestTime: "",
      terms: false,
    });

    setTimeout(() => {
      navigate("/thank-you", { state: { name: form.name } });
    }, 1000);
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name <span style={{ color: "red" }}>*</span></label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 5 }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <label>Email <span style={{ color: "red" }}>*</span></label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 5 }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 5 }}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

        <label>Subject</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 5 }}
        >
          <option>Support</option>
          <option>Sales</option>
          <option>Feedback</option>
          <option>Other</option>
        </select>

        <label>Message <span style={{ color: "red" }}>*</span></label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          style={{ width: "100%", marginBottom: 5 }}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <label>Preferred Contact Method:</label>
        <label>
          <input
            type="radio"
            name="contactMethod"
            value="Email"
            checked={form.contactMethod === "Email"}
            onChange={handleChange}
          />
          Email
        </label>
        <label>
          <input
            type="radio"
            name="contactMethod"
            value="Phone"
            checked={form.contactMethod === "Phone"}
            onChange={handleChange}
          />
        Phone
        </label>

        <div style={{ marginTop: 10 }}>
          <label>Best Time to Reach:</label>
          <input
            type="time"
            name="bestTime"
            value={form.bestTime}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />{" "}
            I agree to the terms <span style={{ color: "red" }}>*</span>
          </label>
          {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
        </div>

        <button
          type="submit"

          style={{
            marginTop: 15,
            padding: "8px 16px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 4,
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
