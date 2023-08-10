import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../templates/Nav/Nav";
import logo from "../assets/logo.svg";
import Footer from "../templates/Footer/Footer";

export default function HomeLayout() {
  const location = useLocation();
  useEffect(() => {
    const currentPage = location.pathname;
    const body = document.getElementsByTagName("body")[0];
    if (currentPage === "/") {
      body.style.backgroundSize = "contain";
    } else {
      body.style.backgroundSize = "cover";
    }
  }, [location.pathname]);

  return (
    <>
      <Nav logo={logo} name="Analog Designs" />
      <Outlet />
      <Footer logo="Analog Designs" />
    </>
  );
}
