import React from "react";
import user from "../../Assets/images/Profile.png";

const Testimonials = () => {
  const testimonialContent = [
    {
      content:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read more",
      name: "James Jansense",
      desc: "Senior UX Designer Microsoft.",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read more",
      name: "James Jansense",
      desc: "Senior UX Designer Microsoft.",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read more",
      name: "James Jansense",
      desc: "Senior UX Designer Microsoft.",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read more",
      name: "James Jansense",
      desc: "Senior UX Designer Microsoft.",
    },
  ];
  return (
    <div className='container mx-auto p-4 py-20'>
      <div className='text-center'>
        <h2>What Our Clients Say</h2>
        <h2 className='text-5xl font-bold leading-[4rem] mt-4 max-w-4xl mx-auto'>
          Trusted by thousands of companies from around the world.
        </h2>
        <p className='max-w-2xl mx-auto mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod
          mrore
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 my-6'>
        {testimonialContent.map(({ content, name, desc }, ind) => (
          <div
            className='rounded-3xl rounded-tl-none p-5 bg-gray-100'
            key={ind}
          >
            <div className='bg-white p-4 rounded-3xl rounded-tl-none'>
              <p className='text-gray-600 text-sm'>{content}</p>
              <div className='flex items-center gap-2 mt-4'>
                <img
                  src={user}
                  alt='user'
                  className='bg-gray-100 rounded-full w-10 h-10 p-3'
                />
                <div>
                  <h2 className='font-bold'>{name}</h2>
                  <h2 className='text-sm'>{desc}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
