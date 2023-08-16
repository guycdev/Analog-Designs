import React, { useState } from "react";

export default function HoverToolTip(props) {
  const { children, text } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="help"
    >
      {children}
      <p style={isHovered ? { opacity: "1" } : { opacity: "0" }}>{text}</p>
    </div>
  );
}
