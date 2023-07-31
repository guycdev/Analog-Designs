import React from "react";
import Form from "./Form";
import Card from "../../../elements/Card";
import Swag from "../../../elements/Swag";
import { information } from "../utils/features";

export default function ContactForm() {
  return (
    <section className="form-container" id="contact">
      <Card id={0}>
        <Form />
      </Card>
      <Swag
        id="more-features"
        featureArr={information}
        style="features-grid"
        heading="We will build for you"
      />
    </section>
  );
}
