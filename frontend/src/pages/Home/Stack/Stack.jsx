import React from "react";
import wixx from "../../../assets/wixx.png";
import shopify from "../../../assets/shopify.jpg";
import wordPress from "../../../assets/wp.png";
import squareSpace from "../../../assets/ss.jpg";
import costume from "../../../assets/costum.jpg";

export default function Stack() {
  return (
    <section className="stack-container section-background card">
      <img src={wixx} alt="Photo of wixx" id="wixx" />
      <img src={shopify} alt="Photo of shopify" id="shopify" />
      <img src={wordPress} alt="Photo of wordpress" id="wordPress" />
      <img src={costume} alt="Photo of costume stack" id="costume" />
      <img src={squareSpace} alt="Photo of square space" id="squareSpace" />
    </section>
  );
}
