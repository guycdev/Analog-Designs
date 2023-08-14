import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import text from "../../../assets/text.svg";
import mail from "../../../assets/mail.svg";
import info from "../../../assets/info.svg";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";

export default function FaceCard(props) {
  const { profile } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.faceContainer}>
      <div
        className={styles.infoCard}
        onMouseEnter={() => setIsHovered((prev) => !prev)}
        onMouseLeave={() => setIsHovered((prev) => !prev)}
      >
        <p style={isHovered ? { opacity: "1" } : { opacity: "0" }}>
          Profile information
        </p>
        <ReactSVG src={info} />
      </div>
      <div className={styles.infoContainer}>
        <img
          src={profile.avi}
          alt="Profile photo"
          className={styles.dashboardProfilePhoto}
        />
        <div>
          <h4>{profile.name}</h4>
          <em className="body-em">{`@${profile.username}`}</em>
        </div>
      </div>
      <div className={styles.miscButtonContainer}>
        <a href="mailto:info@analogdesigns.com">
          <ReactSVG src={mail} />
        </a>
        <NavLink to="contact">
          <ReactSVG src={text} />
        </NavLink>
      </div>
    </div>
  );
}
