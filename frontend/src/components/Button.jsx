import React from "react";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";

export default function Button(props) {
  const { action, buttonType, text, img, messageStatus } = props;

  const blue = {
    backgroundColor: "#4153ef",
    color: "#FFFFFF",
  };

  const grey = {
    backgroundColor: "#ededed",
    color: "#000000",
  };

  const isLoading = messageStatus == "loading";

  return (
    <div className="btn-container">
      <motion.button
        className={buttonType}
        whileHover={buttonType == "primary-btn" ? grey : blue}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={action ? action : null}
      >
        {text}
        {!isLoading && img && <ReactSVG src={img} />}
        {isLoading && <div class="loader"></div>}
      </motion.button>
    </div>
  );
}
