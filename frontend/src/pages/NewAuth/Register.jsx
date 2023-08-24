import React from "react";
import styles from "./Auth.module.css";
import { Form, redirect } from "react-router-dom";
import login from "../../assets/login.svg";
import Headings from "./Headings";
import Socials from "./Socials";
import TextInput from "../../components/TextInput";
import { faEnvelope, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
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
        heading="Nice to Meet You !"
        subheading={
          <>
            Please <span>enter </span> your <span>details</span> to access our
            <span> dashboard manager</span>
          </>
        }
      />
      <Socials />
      <Form method="POST">
        <TextInput
          label="Full Name"
          name="name"
          type="text"
          placeholder="John Doe..."
          icon={faUser}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="example123@gmail.com..."
          icon={faEnvelope}
        />
        <div className={styles.passwordConfContainer}>
          <TextInput
            label="Password"
            icon={faEye}
            name="pass"
            type="password"
            placeholder="min 8 characters..."
          />
          <TextInput
            label="Confirm Password"
            icon={faEye}
            name="conf-pass"
            type="password"
            placeholder="min 8 characters..."
          />
        </div>
        <Button buttonType="primary-btn" text="Sign Up" img={login} />
      </Form>
      <FormRedirect
        text="Have an account ? "
        redirect={<span>Login</span>}
        path="../"
      />
      <Copyright />
    </div>
  );
}
