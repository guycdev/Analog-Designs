import React from "react";
import { motion } from "framer-motion";
import FloatingImages from "./FloatingImages";
import MainCard from "./MainCard";
import { information } from "../utils/information";
import Swag from "../../../elements/Swag";

export default function Hero(props) {
  const sectionVariance = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.2,
      duration: 1.3,
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={sectionVariance}
      transition={sectionVariance.transition}
      className="hero-section section-background"
      id="home"
    >
      <div>
        <MainCard />
        <FloatingImages />
      </div>
      <Swag
        id="features"
        featureArr={information}
        style="swag-container"
        tag={{
          name: "Features",
          color: "#7070ea",
        }}
      />
    </motion.section>
  );
}
