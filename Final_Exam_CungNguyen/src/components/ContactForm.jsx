import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", date: "", message: "" });
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    let e = {};
    if (!form.name) e.name = "Name is required";
    if (!form.email.match(/^[\w-.]+@[\w-]+\.[A-Za-z]{2,}$/))
      e.email = "Invalid email";
    if (form.date < today) e.date = "Date cannot be in the past";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Submitted:", form);
    alert("Submitted!");
    setForm({ name: "", email: "", date: "", message: "" });
  };

  return (
    <form className="card p-4" onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <div className="mb-3">
        <label>Name</label>
        <input className="form-control" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <small className="text-danger">{errors.name}</small>
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <small className="text-danger">{errors.email}</small>
      </div>

      <div className="mb-3">
        <label>Select Date</label>
        <input type="date" min={today} className="form-control"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <small className="text-danger">{errors.date}</small>
      </div>

      <div className="mb-3">
        <label>Message</label>
        <textarea className="form-control"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
