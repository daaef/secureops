import React from "react";
import btn1 from "../../Assets/images/btn1.png";
import btn2 from "../../Assets/images/btn2.png";
import btn3 from "../../Assets/images/btn3.png";
import btn4 from "../../Assets/images/btn4.png";

const Services = () => {
  const serviceList = [
    {
      icon: btn1,
      title: "Some title here",
      content:
        "A detailed wireframe kit made of comprehensive components to get you started on you next website or landing pageproject. ",
    },
    {
      icon: btn2,
      title: "Some title here",
      content:
        "A detailed wireframe kit made of comprehensive components to get you started on you next website or landing pageproject. ",
    },
    {
      icon: btn3,
      title: "Some title here",
      content:
        "A detailed wireframe kit made of comprehensive components to get you started on you next website or landing pageproject. ",
    },
    {
      icon: btn4,
      title: "Some title here",
      content:
        "A detailed wireframe kit made of comprehensive components to get you started on you next website or landing pageproject. ",
    },
  ];

  return (
    <div className='bg-[#020407] text-white -mx-4 p-8 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div>
        <h2 className='text-[18px]'>Our Services</h2>
        <h2 className='text-5xl font-bold leading-[4rem] mt-4'>
          With business processes specifically tailored to meet your needs
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {serviceList.map(({ icon, title, content }, ind) => (
          <div key={ind}>
            <img src={icon} alt={title} />
            <h2 className='text-[20px] font-bold my-2'>{title}</h2>
            <h2 className='text-[#C3C3C3] text-sm'>{content}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
