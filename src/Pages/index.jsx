import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Layout/nav";
import Footer from "../Components/Layout/footer";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPage;
