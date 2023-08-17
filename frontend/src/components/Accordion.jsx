import React, { useState } from "react";
import arrow from "../assets/down-arrow.svg";
import { ReactSVG } from "react-svg";

export default function Accordion(props) {
  const { header, body, id, elementIdClicked } = props;

  const isClicked = elementIdClicked == id;

  return (
    <div className="card" style={{ cursor: "pointer" }} id={id}>
      <div
        className={`accordion-heading-container${isClicked ? "-clicked" : ""}`}
        id={id}
      >
        <h4 id={id}>{header}</h4>
        <div style={{ rotate: isClicked ? "180deg" : "0deg" }} id={id}>
          <ReactSVG src={arrow} />
        </div>
      </div>
      <div style={{ maxHeight: isClicked ? "fit-content" : 0 }} id={id}>
        <p
          style={{
            transition: isClicked ? "all 0.2s ease-in" : "unset",
            padding: "10px",
          }}
          className={`accordion-body${isClicked ? "-clicked" : ""}`}
          id={id}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
