import React from "react";
import styles from "./Auth.module.css";
import { Form } from "react-router-dom";
import Headings from "./Headings";
import Socials from "./Socials";
import TextInput from "../../components/TextInput";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import FormRedirect from "./FormRedirect";
import Copyright from "./Copyright";
import Logo from "./Logo";

export function action(obj) {
  console.log(obj);
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
      <Form>
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
      </Form>
      <FormRedirect
        text="Don't have an account ? "
        redirect={<span>Register here</span>}
        path="./account"
      />
      <Copyright />
    </div>
  );
}
