import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Nav(props) {
  const { logo, name } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 775);
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth <= 775);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth ? (
    <MobileNav logo={logo} name={name} theme={{ theme, setTheme }} />
  ) : (
    <DesktopNav logo={logo} name={name} theme={{ theme, setTheme }} />
  );
}
