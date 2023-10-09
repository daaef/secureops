import React from "react";
import HomeHero from "../Components/HomePage/homeHero";
import Partners from "../Components/HomePage/partners";
import Activities from "../Components/HomePage/activities";

const Home = () => {
  return (
    <div className='p-4'>
      <HomeHero />
      <Partners />
      <Activities />
    </div>
  );
};

export default Home;
