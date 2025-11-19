import React, { useRef, useState } from "react";

const Feedback = () => {
  const nickRef = useRef();
  const ratingRef = useRef();
  const recRef = useRef();
  const commentRef = useRef();
  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = ratingRef.current.value;
    if (!rating) {
      alert("Please select a rating");
      return;
    }
    setSummary({
      nick: nickRef.current.value,
      rating,
      recommend: recRef.current.checked ? "Yes" : "No",
      comments: commentRef.current.value,
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "8px",
  };

  const labelStyle = { fontWeight: 500, marginTop: "10px", display: "block" };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "15px",
  };

  const summaryStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    marginTop: "20px",
    backgroundColor: "#f8f9fa",
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Nickname:</label>
        <input ref={nickRef} style={inputStyle} />

        <label style={labelStyle}>Rating (1-5): <span style={{ color: "red" }}>*</span></label>
        <select ref={ratingRef} style={inputStyle}>
          <option value="">Select</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>

        <div style={{ margin: "10px 0" }}>
          <label>
            <input type="checkbox" ref={recRef} /> Would Recommend?
          </label>
        </div>

        <label style={labelStyle}>Comments:</label>
        <textarea ref={commentRef} style={inputStyle} rows={4}></textarea>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>

      {summary && (
        <div style={summaryStyle}>
          <h3>Feedback Summary</h3>
          <p><strong>Nickname:</strong> {summary.nick}</p>
          <p><strong>Rating:</strong> {summary.rating}</p>
          <p><strong>Recommend:</strong> {summary.recommend}</p>
          <p><strong>Comments:</strong> {summary.comments}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
