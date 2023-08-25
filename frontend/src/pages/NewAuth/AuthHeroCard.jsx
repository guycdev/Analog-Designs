import React, { useEffect, useState, useRef } from "react";
import styles from "./Auth.module.css";
import Headings from "./Headings";
import react from "../../assets/react.svg";
import node from "../../assets/node.svg";
import wixx from "../../assets/wixx.svg";
import squarespace from "../../assets/squarespace.svg";
import Marquee from "../../components/Marquee";

export default function AuthHeroCard() {
  const [pupilStyle, setPupilStyle] = useState({
    left: "50%",
    top: "50%",
    transform: "rotate(0deg)",
  });

  const eyeRadius = 8.96;

  const eyeRefs = [useRef(null), useRef(null)];

  function anglePositining(event) {
    eyeRefs.forEach((eyeRef) => {
      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;
      const angle = Math.atan2(
        event.clientY - eyeCenterY,
        event.clientX - eyeCenterX
      );

      const pupilX = eyeRadius * Math.cos(angle) + 2.25 * eyeRadius;
      const pupilY = eyeRadius * Math.sin(angle) + 2.2 * eyeRadius;

      const rotation = angle * (180 / Math.PI); // Convert to degrees and add 45

      setPupilStyle({
        left: pupilX + "px",
        top: pupilY + "px",
        transform: `rotate(${rotation}deg)`,
      });
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", anglePositining);

    return () => {
      window.removeEventListener("mousemove", anglePositining);
    };
  }, []);

  return (
    <div className={styles.authHeroCardContainer}>
      <Headings
        heading="The simplest way to manage your clients online presence !"
        subheading={
          <>
            Please <span>enter </span> your <span>details</span> to access our
            <span> order manager</span>
          </>
        }
      />
      <div className="card">
        <div className={styles.goggleContainer}>
          <div className={styles.strapContainer}>
            <div className={styles.eyeWrapper}>
              <div className={styles.eye} ref={eyeRefs[0]}>
                <div className={styles.eyeBalls}>
                  <div className={styles.pupels} style={pupilStyle}></div>
                </div>
              </div>
            </div>
            <div className={styles.eyeWrapper}>
              <div className={styles.eye} ref={eyeRefs[1]}>
                <div className={styles.eyeBalls}>
                  <div className={styles.pupels} style={pupilStyle}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee logos={[react, node, squarespace, wixx]} />
    </div>
  );
}
