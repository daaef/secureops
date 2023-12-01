import React from "react";
import Hero from "../Components/Services/hero";
import Ctx from "../Components/HomePage/cta";
import Allservices from "../Components/Services/services";
import useScrollToTop from "../hooks/scrollToTop";

const Services = () => {
  useScrollToTop();
  return (
    <div>
      <Hero />
      <Allservices />
      <Ctx />
    </div>
  );
};

export default Services;
