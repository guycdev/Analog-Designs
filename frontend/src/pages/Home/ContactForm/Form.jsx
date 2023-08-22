import React, { useState } from "react";
import Button from "../../../components/Button";
import Confetti from "react-confetti";
import send from "../../../assets/send.svg";
import useFormSubmission from "../../../hooks/useFormSubmission";
import Subject from "../../../components/Subject";
import consult from "../../../assets/consult.svg";
import brush from "../../../assets/brush.svg";
import pricing from "../../../assets/pricing.svg";
import calander from "../../../assets/calander.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMessage,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TextInput from "../../../components/TextInput";
import TextAreaInput from "../../../components/TextAreaInput";

export default function Form(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    number: "",
    message: "",
  });

  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const { handleSubmit, messageStatus } = useFormSubmission(templateId);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="contact-card">
      <div>
        {messageStatus == "success" && (
          <Confetti recycle={false} numberOfPieces={1200} />
        )}
      </div>
      <form onSubmit={handleSubmit} className="contact-form" id="contact-us">
        <h2 className="contact-heading">Book an Appointment</h2>
        <p className="">
          Schedule an <span> appointment </span> or reach out for a{" "}
          <span> quote</span>
        </p>
        <div>
          <h6>Choose a Service</h6>
          <div className="subject-selector">
            <Subject
              icon={consult}
              subject="Consultation"
              setFormData={setFormData}
              currentValue={formData.subject}
              handleChange={handleChange}
            />
            <Subject
              icon={brush}
              subject="Designs"
              setFormData={setFormData}
              currentValue={formData.subject}
              handleChange={handleChange}
            />
            <Subject
              icon={pricing}
              subject="Pricing"
              setFormData={setFormData}
              currentValue={formData.subject}
              handleChange={handleChange}
            />
            <Subject
              icon={calander}
              subject="Updates"
              setFormData={setFormData}
              currentValue={formData.subject}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="name-container">
          <TextInput
            label={
              <>
                <FontAwesomeIcon icon={faUser} /> First Name
              </>
            }
            id="firstName"
            name="firstName"
            placeholder="First name..."
            value={formData.firstName}
            onChange={handleChange}
          />

          <TextInput
            label={
              <>
                <FontAwesomeIcon icon={faUser} /> Last Name
              </>
            }
            id="lastName"
            name="lastName"
            placeholder="Last name..."
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <TextInput
          label={
            <>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </>
          }
          id="email"
          name="email"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
        />

        <TextInput
          label={
            <>
              <FontAwesomeIcon icon={faPhone} /> Phone Number
            </>
          }
          id="number"
          name="number"
          placeholder="Phone Number..."
          value={formData.number}
          onChange={handleChange}
        />

        <TextAreaInput
          label={
            <>
              <FontAwesomeIcon icon={faMessage} /> Message
            </>
          }
          id="message"
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          buttonType="primary-btn"
          text="Send Message"
          img={send} // Assuming 'send' is imported from somewhere
          messageStatus={messageStatus}
        />
      </form>
    </div>
  );
}
