import React from "react";
import Hero from "../Components/Team/hero";
import Members from "../Components/Team/members";
import Ctx from "../Components/HomePage/cta";
import useScrollToTop from "../hooks/scrollToTop";

const Team = () => {
  useScrollToTop();
  return (
    <div className=''>
      <Hero />
      <Members />
      <Ctx />
    </div>
  );
};

export default Team;
