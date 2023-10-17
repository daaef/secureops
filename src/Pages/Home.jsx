import React from "react";
import HomeHero from "../Components/HomePage/homeHero";
import Partners from "../Components/HomePage/partners";
import Activities from "../Components/HomePage/activities";
import Services from "../Components/HomePage/services";

const Home = () => {
  return (
    <div className='p-4'>
      <HomeHero />
      <Partners />
      <Activities />
      <Services />
    </div>
  );
};

export default Home;
