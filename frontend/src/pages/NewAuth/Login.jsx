import React from "react";
import styles from "./Auth.module.css";
import { Form, redirect } from "react-router-dom";
import login from "../../assets/login.svg";
import Headings from "./Headings";
import Socials from "./Socials";
import TextInput from "../../components/TextInput";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import FormRedirect from "./FormRedirect";
import Copyright from "./Copyright";
import Logo from "./Logo";
import Button from "../../components/Button";

export async function action(obj) {
  try {
    const formData = await obj.request.formData();
    const email = formData.get("email");
    const pass = formData.get("pass");

    const returnObj = {
      email: email,
      pass: pass,
    };

    const data = await fetch(
      "http://api.local.example.com:3003/api/account/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(returnObj),
        credentials: "include",
      }
    );

    return redirect("../dashboard");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <Logo />
      <Headings
        heading="Welcome Back !"
        subheading={
          <>
            Please <span>enter </span> your <span>details</span>
          </>
        }
      />
      <Socials />
      <Form method="POST">
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="example123@gmail.com..."
          icon={faEnvelope}
        />
        <TextInput
          label="Password"
          icon={faEye}
          name="pass"
          type="password"
          placeholder="min 8 characters..."
        />
        <Button buttonType="primary-btn" text="Login" img={login} />
      </Form>
      <FormRedirect
        text="Don't have an account ? "
        redirect={<span>Register here</span>}
        path="./register"
      />
      <Copyright />
    </div>
  );
}
