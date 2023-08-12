import React from "react";
import { motion } from "framer-motion";
import NavContent from "./NavContent";
import MiscNavItems from "./MiscNavItems";

export default function MobileNav(props) {
  const { logo, name, theme } = props;

  return (
    <header className="nav-container">
      <motion.nav
        className="card desktop-nav"
        initial={{
          y: -500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.9,
          },
        }}
      >
        <div className="logos">
          <img src={logo} alt="Analog Studio Logo" />
          <h3 className="logo">{name}</h3>
        </div>
        <div className="vertical-line"></div>
        <NavContent theme={theme} style="desktop-content-container" />
        <MiscNavItems theme={theme} />
      </motion.nav>
    </header>
  );
}
