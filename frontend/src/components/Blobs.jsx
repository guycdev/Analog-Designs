import React from "react";
import blueBlob from "../assets/blob.png";
import greyBlob from "../assets/greyblob.png";
import whiteBlob from "../assets/whiteBlob.png";
import { motion } from "framer-motion";

export default function Blobs(props) {
  const { size, contact } = props;

  const breathingVariant = {
    initial: {
      scale: 1,
      x: -500,
    },
    breathe: {
      rotate: [60, -60, 60],
      x: [0, 0, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
        duration: 3,
      },
    },
  };

  function handleMouseEnter(event) {
    const blob = event.target;
    const classes = blob.classList;

    if (classes.contains("left") || classes.contains("right")) {
      classes.toggle("left");
      classes.toggle("right");
    }

    if (classes.contains("top") || classes.contains("bottom")) {
      classes.toggle("top");
      classes.toggle("bottom");
    }
  }

  return (
    <div className="blob-container">
      <motion.img
        src={blueBlob}
        alt="blobs"
        className={`top left blobs ${size}`}
        initial="initial"
        animate="breathe"
        variants={breathingVariant}
        whileHover={{
          scale: 1.2,
          rotate: 720,
        }}
        onMouseOver={handleMouseEnter}
      />
      <motion.img
        src={whiteBlob}
        alt="blobs"
        className={`middle right blobs ${size}`}
        initial="initial"
        animate="breathe"
        variants={breathingVariant}
        whileHover={{
          scale: 1.2,
          rotate: 720,
        }}
        onMouseEnter={handleMouseEnter}
        style={{ opacity: "0.5" }}
      />
      <motion.img
        src={blueBlob}
        alt="blobs"
        className={`bottom left blobs ${size}`}
        initial="initial"
        animate="breathe"
        variants={breathingVariant}
        whileHover={{
          scale: 1.2,
          rotate: 720,
        }}
        onMouseEnter={handleMouseEnter}
      />
      <motion.img
        src={blueBlob}
        alt="blobs"
        className={`top right blobs ${size}`}
        initial="initial"
        animate="breathe"
        variants={breathingVariant}
        whileHover={{
          scale: 1.2,
          rotate: 720,
        }}
        onMouseOver={handleMouseEnter}
      />
      {contact && (
        <motion.img
          src={greyBlob}
          alt="blobs"
          className={`bottom right blobs ${size}`}
          initial="initial"
          animate="breathe"
          variants={breathingVariant}
          whileHover={{
            scale: 1.2,
            rotate: 720,
          }}
          onMouseOver={handleMouseEnter}
          style={{ opacity: "0.5" }}
        />
      )}
    </div>
  );
}
