import React from "react";
import btn1 from "../../Assets/images/code.png";
import btn2 from "../../Assets/images/cloud.png";
import btn3 from "../../Assets/images/books.png";
import btn4 from "../../Assets/images/train.png";

const Services = () => {
  const serviceList = [
    {
      icon: btn1,
      title: "DevOps Integration & development",
      content:
        "Elevate your services with DevOps integration. We optimize automation and collaboration to enhance your business processes.",
    },
    {
      icon: btn3,
      title: "Consultancy",
      content:
        "Need help getting started? We provide tailored guidance and solutions to drive efficient and more reliable workflow.",
    },
    {
      icon: btn2,
      title: "Cloud migration & optimizing",
      content:
          "Seamlessly transition to the cloud and maximize resource efficiency with our cloud optimization services. Experience the benefits of scalability and cost-effectiveness.",
    },
    {
      icon: btn4,
      title: "Training",
      content:
        "We will hold your hand through the process of adapting to new solutions curated to scale your business immensely.",
    },
  ];

  return (
    <div className='bg-[#020407] text-white -mx-4 '>
      <div className='container mx-auto p-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-[18px]'>Our Services</h2>
          <h2 className='text-5xl font-bold leading-[4rem] mt-4'>
            With business processes specifically tailored to meet your needs
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 '>
          {serviceList.map(({ icon, title, content }, ind) => (
            <div
              key={ind}
              className='rounded-md border-gray-800 border-[1px] overflow-hidden shadow-2xl shadow-gray-900'
            >
              <div className='flex gap-3 items-center bg-white p-3'>
                <img src={icon} alt={title} />
                <h2 className='text-[20px] text-[#1A6ED8] font-bold my-2'>
                  {title}
                </h2>
              </div>
              <p className='text-[#C3C3C3] text-sm p-3 font-light'>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
