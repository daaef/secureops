import React from "react";
import in2 from "../../Assets/images/in2.png";
import ig2 from "../../Assets/images/ig2.png";
import x2 from "../../Assets/images/X2.png";

const Address = () => {
  return (
    <div className='mt-5 rounded-md shadow-xl shadow-[#E8F1FB] p-8 bg-[#E8F1FB]'>
      <h2 className='font-bold text-gray-700'>Office</h2>
      <p className='mt-2 font-light text-sm text-gray-600'>16192 Coastal Highway, Lewes, Delaware 19958, United
        States of America.
      </p>
      <p className='mt-2 font-light text-sm text-gray-600'>10B Tinubu Road, Ilupeju, Lagos, Nigeria
      </p>
      <h2 className='font-bold text-gray-700 mt-5'>Contact</h2>
      <p className='my-1 font-light text-sm text-gray-600'>hello@secureops-solutions.tech</p>
      <p className='font-light text-sm text-gray-600'>+1 (919) 791 6158 / +234 704 000 3055</p>
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
