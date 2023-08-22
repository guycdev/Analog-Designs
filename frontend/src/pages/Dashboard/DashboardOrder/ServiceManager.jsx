import React, { useState } from "react";
import styles from "./DashboardOrder.module.css";
import info from "../../../assets/info.svg";
import { ReactSVG } from "react-svg";
import rightArrow from "../../../assets/rightArrow.svg";
import leftArrow from "../../../assets/leftArrow.svg";
import HoverToolTip from "../../../components/HoverToolTip";

export default function ServiceManager(props) {
  const { services, setFormData } = props;

  const [activeServices, setActiveServices] = useState(1);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      //Copy of existing services
      const servicesArr = prev.services;

      //Add new service object
      servicesArr[activeServices - 1] = {
        ...(servicesArr[activeServices - 1] || {}),
        [name]: value,
      };

      return {
        ...prev,
        services: servicesArr,
      };
    });
  }

  function addService() {
    setActiveServices((prev) => prev + 1);
    setFormData((prev) => {
      const servicesArr = services;
      servicesArr.push({
        serviceName: "",
        servicePrice: "",
        serviceDescription: "",
      });

      return {
        ...prev,
        services: servicesArr,
      };
    });
  }

  function previousService() {
    if (activeServices == 1) {
      return;
    }
    setActiveServices((prev) => (prev -= 1));
  }

  return (
    <div className={`card ${styles.serviceContainer}`}>
      <div className={styles.orderFormHeadings}>
        <h2>Manage Services</h2>
        <p>Input Company Services / Offerings</p>
        <HoverToolTip text="Use the page arrows to add new services or edit previous ones">
          <ReactSVG src={info} />
        </HoverToolTip>
      </div>
      <form className={styles.serviceForm}>
        <div className={styles.serviceInformationContainer}>
          <div>
            <label htmlFor="service-name">Service Name:</label>
            <input
              name="serviceName"
              value={services[activeServices - 1].serviceName}
              type="text"
              id="service-name"
              required
              placeholder="Name..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="service-price">Price:</label>
            <input
              name="servicePrice"
              value={services[activeServices - 1].servicePrice}
              type="text"
              id="service-price"
              required
              placeholder="$ / hour..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="service-description">Service Description:</label>
          <textarea
            name="serviceDescription"
            id="service-description"
            value={services[activeServices - 1].serviceDescription}
            onChange={handleChange}
            placeholder="Description..."
          ></textarea>
        </div>
      </form>
      <div className={styles.serviceScroller}>
        <div onClick={previousService}>
          <ReactSVG
            src={leftArrow}
            beforeInjection={(svg) => {
              svg.classList.add(styles.serviceScrollButtons);
            }}
          />
        </div>
        {`${activeServices}`}
        <div onClick={addService}>
          <ReactSVG
            src={rightArrow}
            beforeInjection={(svg) => {
              svg.classList.add(styles.serviceScrollButtons);
            }}
          />
        </div>
      </div>
    </div>
  );
}
