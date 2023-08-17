import React, { useState } from "react";
import Accordion from "../../../components/Accordion";

export default function Faq() {
  const [elementIdClicked, setElementIdClicked] = useState(0);

  function handleClick(event) {
    const { id } = event.target;

    setElementIdClicked(id);
  }

  return (
    <div className="card" onClick={handleClick}>
      <Accordion
        header="How long does it take for order’s to be complete ?"
        body="Order's are usually delivered within 24-48 hours, however some hosting complications may arise along the way and so the timeline may extend to 72 hours at the latest."
        id="0"
        elementIdClicked={elementIdClicked}
      />
      <Accordion
        header="How do you backdate the website’s presence to appear older then it is  ?"
        body="Underwriters often use the WHOIS domain registration to flag domains that have been registered too close to the application date. To overcome this issue we purchase pre-existing domains that were registered at a date prior to your order."
        id="1"
        elementIdClicked={elementIdClicked}
      />
      <Accordion
        header="How do I finalize my payment ?"
        body="To finalize your order, open a support ticket via our contact us section. We accept E-transfer, cash, and crypto as payment options."
        id="2"
        elementIdClicked={elementIdClicked}
      />
      <Accordion
        header="Can I request an invoice to expense my orders ?"
        body="To request for an invoice, open a support ticket and one should be provided within 24 hours. The invoice will include a breakdown of all project expenses."
        id="3"
        elementIdClicked={elementIdClicked}
      />
    </div>
  );
}
