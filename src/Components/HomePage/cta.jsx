import React from "react";
import { Link } from "react-router-dom";

const Ctx = () => {
  return (
    <div className='p-8 py-12 -m-4 bg-gradient-img text-white'>
      <div className='mx-auto container sm:grid items-center sm:grid-cols-2'>
        <div>
          <h2 className='text-5xl font-bold leading-[4rem]'>
            Ready to Secure Your Future with Our Expert Team? Let's Collaborate!
          </h2>
        </div>
        <Link
          className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white rounded-md p-3 text-sm px-20 justify-center w-fit sm:ml-auto mt-8 sm:mt-0 block'
          to='/'
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Ctx;
