import React from "react";
import MarqueeContianer from "react-fast-marquee";
import { ReactSVG } from "react-svg";

export default function Marquee(props) {
  const { logos } = props;

  const logoArr = logos.map((logo, index) => {
    return (
      <ReactSVG
        key={index}
        src={logo}
        beforeInjection={(svg) => {
          svg.classList.add("marquee-item");
        }}
      />
    );
  });

  return <MarqueeContianer>{logoArr}</MarqueeContianer>;
}
