import React from "react";
import scale from "../../Assets/images/scale.png";
import collab from "../../Assets/images/collab.png";
import data from "../../Assets/images/data.png";
import expert from "../../Assets/images/expert.png";
import finger from "../../Assets/images/finger.png";
import delivery from "../../Assets/images/delivery.png";
import flex from "../../Assets/images/flex.png";

const Partners = () => {
  const arr = [
  {
      title: "Efficiency & Scalability",
      icon: scale,
    },
    {
      title: "Collaboration",
      icon: collab,
    },
    {
      title: "Data-drivern Solutions",
      icon: data,
    },
    {
      title: "Expert Team",
      icon: expert,
    },
    {
      title: "A+ Security",
      icon: finger,
    },
    {
      title: "On-time Delivery",
      icon: delivery,
    },
    {
      title: "Flexibility & Customization",
      icon: flex,
    },
  ];
  return (
    <div className='mx-auto container my-20 p-4'>
      <h2 className='text-center text-2xl font-bold text-gray-700'>
        What we offer our client
      </h2>
      <div className='mt-5 flex gap-8 overflowX overflow-x-scroll'>
        {arr.map(({ title, icon }, ind) => {
          return (
            <div
              key={ind}
              className='flex items-center gap-2 bg-[#E8F1FB] p-3 rounded-md shadow-sm'
            >
              <img src={icon} alt='check' />
              <h2 className='text-[#3C3C3C] whitespace-nowrap pr-6'>{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
