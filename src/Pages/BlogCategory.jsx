import React from "react";
import NewsContainer from "../Components/Blog/newsContainer";
import useScrollToTop from "../hooks/scrollToTop";

const BlogCategory = () => {
  useScrollToTop();
  return (
    <div className='mx-auto container p-4'>
      <NewsContainer category='DevOps Insights' />
    </div>
  );
};

export default BlogCategory;
