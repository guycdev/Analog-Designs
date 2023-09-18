import React from "react";
import styles from "./Auth.module.css";
import { Form, redirect, useActionData } from "react-router-dom";
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
    // "http://api.local.example.com:3003/api/account/login",
    // "http://ec2-18-215-255-171.compute-1.amazonaws.com:3003/api/account/login"

    const data = await fetch(
      "http://analogdesigns.net:3003/api/account/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(returnObj),
        credentials: "include",
      }
    );

    if (data.status == 401) {
      return "User does not exist";
    }

    console.log("hi");

    return redirect("../dashboard");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const error = useActionData();
  console.log(error);

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
        {error && <h4 className={styles.error}>{error}</h4>}

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
