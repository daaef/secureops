import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import LandingPage from "../Pages";
import Contact from "../Pages/Contact";
import BlogCategory from "../Pages/BlogCategory";
import SingleBlog from "../Pages/SingleBlog";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='team' element={<Team />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/category/:catId' element={<BlogCategory />} />
          <Route path='blog/:blogId' element={<SingleBlog />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
