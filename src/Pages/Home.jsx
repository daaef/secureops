import React from "react";
import HomeHero from "../Components/HomePage/homeHero";
import Partners from "../Components/HomePage/partners";
import Activities from "../Components/HomePage/activities";
import Services from "../Components/HomePage/services";
import Testimonials from "../Components/HomePage/testimonials";
import Faqs from "../Components/HomePage/faqs";
import Ctx from "../Components/HomePage/cta";
import useScrollToTop from "../hooks/scrollToTop";

const Home = () => {
  useScrollToTop();
  return (
    <div className='p-4'>
      <HomeHero />
      <Partners />
      <Activities />
      <Services />
      {/* <Testimonials /> */}
      <Faqs />
      <Ctx />
    </div>
  );
};

export default Home;
