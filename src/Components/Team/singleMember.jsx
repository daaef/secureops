import React, { useState } from "react";
const SingleMember = ({ img, name, title, details: { p1, p2 } }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);

  return (
    <div
      className='relative cursor-pointer'
      onMouseEnter={() => setIsDetailsShown(true)}
      onMouseLeave={() => setIsDetailsShown(false)}
    >
       {/*<img className='rounded-md w-full' src={img} alt={name} />*/}
      <div className='p-2'>
        <h2 className='font-bold text-[28px] text-gray-800'>{name}</h2>
        <h2 className='text-[22px] text-gray-500'>{title}</h2>
      </div>

      <div
        className={`details-container ${
          isDetailsShown ? "visible-details" : "hidden-details"
        }`}
      >
        <p className='text-sm'>{p1}</p>
        <p className='text-sm'>{p2}</p>
      </div>
    </div>
  );
};

export default SingleMember;
