import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../elements/Button";
import google from "../../../../assets/google.svg";
import apple from "../../../../assets/apple.svg";
import login from "../../../../assets/login.svg";
import logo from "../../../../assets/logo.svg";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function validateLogin() {
    try {
      const data = await fetch("http://localhost:3003/api/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const response = await data.json();

      return response;
    } catch (err) {
      return err;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await validateLogin();
    console.log(response);
  }

  return (
    <div className="login-card">
      <div className="main-form">
        <ReactSVG
          src={logo}
          beforeInjection={(svg) => {
            svg.classList.add("login-logo");
          }}
        />
        <h2 className="contact-heading">Login to an Existing Account</h2>
        <p className="login-p">
          Enter your <span>credentials </span>to access your
          <span> account</span>
        </p>
        <div className="app-login">
          <Button
            buttonType="secondary-btn"
            text="Log in with Google"
            img={google}
          />
          <Button
            buttonType="secondary-btn"
            text="Log in with Apple"
            img={apple}
          />
        </div>
        <form className="login-form" id="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example123@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </div>
          <div>
            <label htmlFor="pass">
              <FontAwesomeIcon icon={faEye} />
              Password
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="min 8 characters"
              value={formData.pass}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </div>
          <Button buttonType="primary-btn" text="Login" img={login} />
        </form>
        <Link to="./register" className="wrong-page-link">
          Don't have an account ? <span>Register here</span>
        </Link>
        <pre className="grey utils">
          2023 Analog Designs. All right Reserved
        </pre>
      </div>
    </div>
  );
}
