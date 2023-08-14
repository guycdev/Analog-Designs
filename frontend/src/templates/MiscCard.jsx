import React from "react";
import dashboard from "../assets/dashboard.png";

export default function MiscCard() {
  return (
    <div className="misc-card-container">
      <h2 className="contact-heading">
        The simplest way to manage your clients online presence
      </h2>
      <p className="login-p">Enter your credentials to access your account</p>
      <img src={dashboard} alt="" />
    </div>
  );
}
