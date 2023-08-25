import React from "react";
import Hero from "./Hero/Hero";
import Stack from "./Stack/Stack";
import Pricing from "./Pricing/Pricing ";
import VideoObject from "./VideoObject/VideoObject";
import ContactForm from "./ContactForm/ContactForm";
import AboutUs from "./AboutUs/AboutUs";
import Steps from "./Steps/Steps";
import Testimonials from "./Testimonials/Testimonials";
import Swag from "../../components/Swag";
import { information } from "./utils/information";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import node from "../../assets/node.svg";
import shopify from "../../assets/shopify.svg";
import wixx from "../../assets/wixx.svg";
import squarespace from "../../assets/squarespace.svg";
import wordPress from "../../assets/word-press.svg";
import Marquee from "../../components/Marquee";

function App() {
  return (
    <main className="container">
      <Hero />
      <Swag
        id="features"
        featureArr={information}
        style="swag-container"
        tag={{
          name: "Features",
          color: "#7070ea",
        }}
      />
      <AboutUs />
      <Steps />
      <VideoObject
        sectionNumber={4}
        psudoContent={"Our Work"}
        direction={true}
        content={{
          header: "See Our Work",
          subheading:
            "Check out these videos of our past projects to get a feel for what we do",
        }}
      />
      {/* <VideoObject
                sectionNumber={5}
                psudoContent={'Our Designs'}
                direction={false}
                content={{
                    header: "Our Design Selection",
                    subheading: 'Check out these videos of our past projects to get a feel for what we do'
                }}
            /> */}
      {/*Temporary disabling this video player until i get assetes for designs*/}
      <Testimonials />
      {/* <Stack /> */}
      <Marquee
        logos={[react, bootstrap, node, shopify, wixx, squarespace, wordPress]}
      />
      <Pricing />

      <ContactForm />
    </main>
  );
}

export default App;
