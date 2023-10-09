import React from "react";
import adobe from "../../Assets/images/adobe.png";
import airbnb from "../../Assets/images/airbnb.png";
import amazon from "../../Assets/images/amazon.png";
import google from "../../Assets/images/google.png";
import netflix from "../../Assets/images/netflix.png";

const Partners = () => {
  const logos = [google, airbnb, netflix, amazon, adobe];
  return (
    <div className='mx-auto max-w-5xl my-20 p-4'>
      <h2 className='text-center text-lg'>Clients we've worked with</h2>
      <div className='mt-5 grid grid-cols-5 gap-4'>
        {logos.map((logo, ind) => (
          <img
            key={ind}
            src={logo}
            className='h-10 object-contain'
            alt='logo'
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
