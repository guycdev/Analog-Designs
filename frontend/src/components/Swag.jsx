import React from "react";
import SwagRows from "./SwagRows";
import { motion } from "framer-motion";

export default function Swag(props) {
  const { featureArr, style, tag, heading, content, id } = props;

  const elementArr = featureArr.map((obj, index) => {
    return (
      <SwagRows
        key={obj.id}
        icon={obj.icon}
        header={obj.header}
        description={obj.description}
        delay={index * 0.2 + 0.1}
        tag={tag}
      />
    );
  });

  return <section className={style}>{elementArr}</section>;
}
