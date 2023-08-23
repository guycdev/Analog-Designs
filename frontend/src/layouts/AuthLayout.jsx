import React from "react";
import MiscCard from "../templates/MiscCard";
import { Outlet } from "react-router-dom";

export default function Login() {
  return (
    <section className="login-container">
      <div className="card">
        <Outlet />
      </div>
      <div></div>
    </section>
  );
}
