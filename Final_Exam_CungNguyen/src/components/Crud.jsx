import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Crud() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    const res = await axios.post("https://jsonplaceholder.typicode.com/users", form);

    setUsers([res.data, ...users]);
    setForm({ name: "", email: "", phone: "" });
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  };

  const handleUpdate = async () => {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${editingId}`,
      form
    );

    setUsers(users.map((u) => (u.id === editingId ? res.data : u)));
    setEditingId(null);
    setForm({ name: "", email: "", phone: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container">

      <h2 className="mb-4 text-center">Users CRUD (JSONPlaceholder + Bootstrap)</h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-light fw-bold">Create New User</div>

        <div className="card-body">

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter phone"
            />
          </div>

          {editingId ? (
            <button className="btn btn-warning" onClick={handleUpdate}>
              Update User
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleCreate}>
              Create User
            </button>
          )}
        </div>
      </div>

      <table className="table table-striped table-bordered shadow-sm">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th width="150">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>

              <td>
                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => handleEdit(u)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
