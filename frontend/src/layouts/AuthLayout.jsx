import React from "react";
import AuthHeroCard from "../pages/NewAuth/AuthHeroCard";
import { Outlet } from "react-router-dom";

export default function Login() {
  return (
    <section className="login-container">
      <div className="">
        <Outlet />
      </div>
      <AuthHeroCard />
    </section>
  );
}
