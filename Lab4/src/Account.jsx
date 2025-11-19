import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => (
  <div>
    <h2>Account</h2>
    <nav>
      <NavLink to="profile">Profile</NavLink> | <NavLink to="settings">Settings</NavLink>
    </nav>
    <hr />
    <Outlet /> {/* Nested routes render here */}
  </div>
);

export default Account;


