import React from "react";
import Hero from "../Components/Blog/hero";
import Ctx from "../Components/HomePage/cta";
import Headline from "../Components/Blog/headline";
import Categories from "../Components/Blog/categories";
import NewsContainer from "../Components/Blog/newsContainer";
import useScrollToTop from "../hooks/scrollToTop";

const Blog = () => {
  useScrollToTop();
  return (
    <div>
      <Hero />
      <Headline />
      <Categories />
      <NewsContainer showMore={true} category='Latest Post' />
      <NewsContainer showMore={true} category='DevOps Insights' />
      <NewsContainer showMore={true} category='Security Tips' />
      <Ctx />
    </div>
  );
};

export default Blog;
