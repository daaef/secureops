import React from "react";
import { Link } from "react-router-dom";
import call from "../../Assets/images/call2.png";
import hero from "../../Assets/images/hero.png";

const HomeHero = () => {
  return (
    <div className='mx-auto container p-4 md:p-8 rounded-md shadow-2xl shadow-blue-100 grid grid-cols-1 md:grid-cols-2 md:items-center gap-8 bg-gradient-img text-white'>
      <div>
        <h2 className='text-5xl font-bold leading-[4rem]'>
          Build Sustainable Solutions with SecureOps
        </h2>

        <p className='my-6 text-base md:text-lg font-light'>
          At secure ops, we empower you by building efficient scalable solutions
          tailored to meet your needs.
        </p>
        <Link
          className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white md:flex items-center rounded-md p-3 gap-2 text-sm px-6 hidden justify-center w-fit'
          to='/contact'
        >
          <img src={call} alt='call' />
          Book a free call
        </Link>
      </div>
      <div>
        <img className='w-full rounded-xl' src={hero} alt='hero' />
      </div>
    </div>
  );
};

export default HomeHero;
