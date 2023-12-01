import React from "react";
import news from "../Assets/images/news.png";
import NewsContainer from "../Components/Blog/newsContainer";
import useScrollToTop from "../hooks/scrollToTop";

const SingleBlog = () => {
  useScrollToTop();
  return (
    <div className='container mx-auto'>
      <div className='my-20'>
        <h2 className='text-center text-sky-600 bg-gray-100 rounded-3xl p-3 w-fit mx-auto px-6'>
          DevOps Insight
        </h2>
        <h2 className='font-bold text-gray-700 text-3xl my-4 text-center'>
          Streamlining development: The power of CI/CD pipelines
        </h2>
        <img src={news} className='w-full object-cover' alt='' />
      </div>
      <NewsContainer category={"Related Posts"} />
    </div>
  );
};

export default SingleBlog;
