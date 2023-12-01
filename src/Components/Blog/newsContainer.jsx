import React from "react";
import { Link } from "react-router-dom";
import news from "../../Assets/images/news.png";

const NewsContainer = ({ category }) => {
  return (
    <div className='p-4 container mx-auto text-gray-800 my-10'>
      <div className='flex justify-between gap-4'>
        <h2 className='font-bold text-xl'>{category}</h2>
        <Link to='/' className='text-sky-600 font-medium'>
          View All
        </Link>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
        {[0, 1, 2].map((item, ind) => {
          return (
            <div key={ind}>
              <img className='w-full' src={news} alt='news' />
              <div className='flex gap-4 items-center text-sm my-4'>
                <h2 className='rounded-full p-2 border-[1px] border-gray-400'>
                  {" "}
                  DevOps Insight
                </h2>
                <div className='rounded-full h-1 w-1 bg-gray-200' />
                <h2>5 MINS READ</h2>
              </div>
              <h2 className='font-bold'>
                Streamlining development: The power of CI/CD pipelines
              </h2>
              <p className='mt-2 text-base text-gray-600'>
                Dive into the world of Continuous Integration and Continuous
                Delivery (CI/CD) pipelines and discover how they can accelerate
                your development process while ensuring quality.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsContainer;
