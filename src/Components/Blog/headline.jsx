import React from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/images/headline.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Headline = () => {
  return (
    <div className='mx-auto container p-4 md:p-8 md:rounded-md shadow-2xl shadow-blue-100 mb-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-headline-img text-white'>
      <img className='w-full rounded-xl' src={hero} alt='hero' />
      <div>
        <div className='flex gap-4 items-center'>
          <h2 className='rounded-full p-2 border-[1px] border-gray-400'>
            {" "}
            DevOps Insight
          </h2>
          <div className='rounded-full h-1 w-1 bg-white' />
          <h2>5 MINS READ</h2>
        </div>
        <h2 className='text-3xl font-bold my-4'>
          The Evolution of DevOps: From Concept to Game-Changer
        </h2>

        <Link
          className='bg-gray-200 bg-opacity-10 p-3 px-4 flex items-center gap-2 w-fit rounded-md'
          to='/'
        >
          Read More <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default Headline;
