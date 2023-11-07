import React from "react";
import in2 from "../../Assets/images/in2.png";
import ig2 from "../../Assets/images/ig2.png";
import x2 from "../../Assets/images/X2.png";

const Address = () => {
  return (
    <div className='mt-5 rounded-md shadow-xl shadow-[#E8F1FB] p-8 bg-[#E8F1FB]'>
      <h2 className='font-bold text-gray-700'>Office</h2>
      <p className='mt-2 font-light text-sm text-gray-600'>
        33, New york City. Off buliverd street across the white house. United
        States of America.
      </p>
      <h2 className='font-bold text-gray-700 mt-5'>Contact</h2>
      <p className='my-1 font-light text-sm text-gray-600'>hello@mail.com</p>
      <p className='font-light text-sm text-gray-600'>+21000000000</p>
      <h2 className='font-bold text-gray-700 mt-5'>Follow us on the Media</h2>
      <div className='flex mt-2 gap-5'>
        <img src={in2} alt='' />
        <img src={ig2} alt='' />
        <img src={x2} alt='' />
      </div>
    </div>
  );
};

export default Address;
