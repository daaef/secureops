import React from "react";
import ai from "../../Assets/images/ai.png";
import security from "../../Assets/images/security.png";

const Activities = () => {
  return (
    <div className='p-4 container mx-auto'>
      <div className='grid mb-20 grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div>
          <h2 className='text-5xl font-bold leading-[4rem] text-gray-700'>
            Embracing AI Innovation
          </h2>
          <p className='mt-5 text-[#3C3C3C]'>
            The paradigm is shifting and we are conscious of that fact. Our intelligent SecureOps Team integrates advanced AI technologies into our workflow, elevating our services to a new realm of efficiency. Our goal is to deliver unrivaled results to our clients hence setting a new industry standard.
          </p>
        </div>
        <img className='w-full' src={ai} alt='ai' />
      </div>
      <div className='flex flex-col-reverse md:flex-row my-20 gap-8 items-center'>
        <img src={security} className='w-full md:w-1/2' alt='ai' />
        <div className='md:w-[50%]'>
          <h2 className='text-5xl font-bold leading-[4rem] text-gray-700'>
            SecureOps Security Approach
          </h2>
          <p className='mt-5 text-[#3C3C3C]'>
            Your security matters and at SecureOps, we prioritize the security of our clients and use state-of-art technologies to ensure clients’ privacy. By integrating efficient security into your business pipeline, we shield you from security vulnerabilities and threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
