import React from "react";
import NewsContainer from "../Components/Blog/newsContainer";

const BlogCategory = () => {
  return (
    <div className='mx-auto container p-4'>
      <NewsContainer category='DevOps Insights' />
    </div>
  );
};

export default BlogCategory;
