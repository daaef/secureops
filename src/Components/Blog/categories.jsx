import React from "react";

const Categories = () => {
  const cats = [
    "DevOps Insights",
    "Security Tips",
    "Technology Trends",
    "Cybersecurity",
    "Agile Methodologies",
  ];
  return (
    <div className='container mx-auto p-4'>
      <h2 className='font-bold text-2xl text-center text-gray-800'>
        Top Categories
      </h2>

      <div className='flex overflow-x-scroll gap-4 overflowX my-5'>
        {cats.map((item, key) => {
          return (
            <div
              className='bg-sky-100 p-3 rounded-3xl cursor-pointer'
              key={key}
            >
              <h2 className='text-gray-800 whitespace-nowrap select-none'>
                {item}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
