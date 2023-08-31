import React from "react";
import arrow from "../../../assets/arrow.svg";
import Circles from "../../../components/Circles";
import Blobs from "../../../components/Blobs";
import Tag from "../../../components/Tag";
import Button from "../../../components/Button";
import whiteArrow from "../../../assets/white-arrow.svg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { HashLink } from "react-router-hash-link";

export default function MainCard(props) {
  const animationVar = { props };

  return (
    <motion.div className="content-block card ">
      <div className="main-content">
        <p>
          <em className="body-em">Design Your Success</em>
        </p>
        <h1 className="welcome-heading">
          Efficiency Meets&nbsp;
          <Typewriter
            options={{
              strings: ["Trust:", "Pace:", "Flair:"],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
            }}
          />
          <div>
            Creating a Streamlined <span>Online Presence</span>
          </div>
        </h1>
        <p className="subheading">
          An efficient solution to creating an online presence for borrowers
        </p>
        <div className="btn-container">
          <HashLink to="#demos">
            <Button
              buttonType="primary-btn"
              text="Live Demos"
              variance={{
                scale: 1.1,
                backgroundColor: "#ededed",
                color: "black",
              }}
              img={whiteArrow}
              hoverImg={arrow}
            />
          </HashLink>
          <HashLink to="#pricing">
            <Button
              buttonType="secondary-btn"
              variance={{
                scale: 1.1,
                backgroundColor: "#007BFF",
                color: "white",
              }}
              text="Learn More"
              img={arrow}
              hoverImg={whiteArrow}
            />
          </HashLink>
        </div>
      </div>
      <hr className="main-hr" />
      <div className="container-footer">
        <div className="stat-items">
          <Circles />
          <p className="small-p">
            Building an online presence that banks<span> value and trust </span>
          </p>
          <Tag name="Welcome" color="#4153ef" />
        </div>
      </div>
      <Blobs size="big" />
    </motion.div>
  );
}
