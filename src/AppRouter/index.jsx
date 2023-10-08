import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import LandingPage from "../Pages";

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
        </Route>

        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
{
  /* <Route path='track/:trackID/' element={<Track />} /> */
}
