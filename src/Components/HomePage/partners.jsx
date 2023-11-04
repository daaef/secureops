import React from "react";
import check from "../../Assets/images/check.png";

const Partners = () => {
  return (
    <div className='mx-auto container my-20 p-4'>
      <h2 className='text-center text-2xl font-bold text-gray-700'>
        What we offer our client
      </h2>
      <div className='mt-5 flex gap-8 items-center justify-center flex-col md:flex-row'>
        <div className='flex items-center gap-2 bg-[#E8F1FB] p-4 px-8 sm:px-5 lg:px-8 rounded-md shadow-sm'>
          <img src={check} alt='check' />
          <h2 className='text-[#3C3C3C]'>Efficiency & Scalability</h2>
        </div>
        <div className='flex items-center gap-2 bg-[#E8F1FB] p-4 px-8 sm:px-5 lg:px-8 rounded-md shadow-sm'>
          <img src={check} alt='check' />
          <h2 className='text-[#3C3C3C]'>Collaboration</h2>
        </div>
        <div className='flex items-center gap-2 bg-[#E8F1FB] p-4 px-8 sm:px-5 lg:px-8 rounded-md shadow-sm'>
          <img src={check} alt='check' />
          <h2 className='text-[#3C3C3C]'>Data-drivern Solutions</h2>
        </div>
      </div>
      <div className='mt-5 flex gap-8 items-center justify-center flex-col sm:flex-row'>
        <div className='flex items-center gap-2 bg-[#E8F1FB] p-4 px-8 sm:px-5 lg:px-8 rounded-md shadow-sm'>
          <img src={check} alt='check' />
          <h2 className='text-[#3C3C3C]'>Expert Team</h2>
        </div>
        <div className='flex items-center gap-2 bg-[#E8F1FB] p-4 px-8 sm:px-5 lg:px-8 rounded-md shadow-sm'>
          <img src={check} alt='check' />
          <h2 className='text-[#3C3C3C]'>A+ Security</h2>
        </div>
        <div className='flex items-center gap-2 bg-[#E8F1FB] p-4 px-8 sm:px-5 lg:px-8 rounded-md shadow-sm'>
          <img src={check} alt='check' />
          <h2 className='text-[#3C3C3C]'>On-time Delivery</h2>
        </div>
      </div>
      <div className='mt-5 flex gap-8 items-center justify-center'>
        <div className='flex items-center gap-2 bg-[#E8F1FB] p-4 px-8 sm:px-5 lg:px-8 rounded-md shadow-sm'>
          <img src={check} alt='check' />
          <h2 className='text-[#3C3C3C]'>Flexibility & Customization</h2>
        </div>
      </div>
    </div>
  );
};

export default Partners;
