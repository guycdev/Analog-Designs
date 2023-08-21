import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../templates/Nav/Nav";
import logo from "../assets/logo.svg";
import Footer from "../templates/Footer/Footer";

export default function HomeLayout() {
  return (
    <div className="main-container">
      <Nav logo={logo} name="Analog Designs" />
      <Outlet />
      <Footer logo="Analog Designs" />
    </div>
  );
}
