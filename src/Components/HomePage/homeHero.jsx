import React from "react";
import { Link } from "react-router-dom";
import desktop from "../../Assets/images/desktop.png";
import hero from "../../Assets/images/hero.png";

const HomeHero = () => {
  return (
    <div className='mx-auto container p-4 md:p-8 rounded-md shadow-2xl shadow-blue-100 mb-10 flex flex-col md:flex-row  md:items-center gap-8 bg-gradient-img text-white'>
      <div>
        <h2 className='text-5xl font-bold leading-[4rem]'>
          Empowering Companies with SecureOps
        </h2>

        <p className='my-6 text-base md:text-lg font-light'>
          A detailed wireframe kit made of comprehensive components to get you
          started on you next website or landing pageproject.
        </p>
        <Link
          className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white md:flex items-center rounded-md p-3 gap-2 text-sm px-6 hidden justify-center w-fit'
          to='login'
        >
          <img src={desktop} alt='call' />
          Work with us
        </Link>
      </div>
      <img className='w-96 rounded-xl' src={hero} alt='hero' />
    </div>
  );
};

export default HomeHero;
