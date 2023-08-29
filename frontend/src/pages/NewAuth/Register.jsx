import React from "react";
import styles from "./Auth.module.css";
import { Form, redirect, useActionData } from "react-router-dom";
import login from "../../assets/login.svg";
import Headings from "./Headings";
import Socials from "./Socials";
import TextInput from "../../components/TextInput";
import {
  faEnvelope,
  faEye,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import FormRedirect from "./FormRedirect";
import Copyright from "./Copyright";
import Logo from "./Logo";
import Button from "../../components/Button";

export async function action(obj) {
  try {
    const formData = await obj.request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const pass = formData.get("pass");
    const phone = formData.get("phone");
    const confPass = formData.get("conf-pass");

    const avi = await fetch(
      "https://random-data-api.com/api/v2/users?size=2&is_xml=true"
    );

    const avatarData = await avi.json();

    const returnObj = {
      name,
      phone,
      email,
      pass,
      confPass,
      avatar: avatarData[0].avatar,
    };

    const data = await fetch(
      "http://ec2-18-215-255-171.compute-1.amazonaws.com:3003/api/account/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(returnObj),
        credentials: "include",
      }
    );

    if (data.status == 400) {
      const errorMessage = await data.json();
      return errorMessage.message;
    }

    return redirect("../");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const error = useActionData();

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
        <TextInput
          label="Phone"
          name="phone"
          type="number"
          placeholder="647-111-1234..."
          icon={faPhone}
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
        {error && <h4 className={styles.error}>{error}</h4>}
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
