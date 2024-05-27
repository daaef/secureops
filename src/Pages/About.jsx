import React from "react";
import Hero from "../Components/About/hero";
import Ctx from "../Components/HomePage/cta";
import WhoWeAre from "../Components/About/whoWeAre";
import CoreValues from "../Components/About/coreValues";
import WhyChooseUs from "../Components/About/whyChooseUs";
import useScrollToTop from "../hooks/scrollToTop";

const About = () => {
  useScrollToTop();
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <CoreValues />
      <WhyChooseUs />
      <Ctx />
    </div>
  );
};

export default About;
