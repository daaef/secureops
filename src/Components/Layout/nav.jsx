import React, { useState } from "react";
import logo from "../../Assets/images/logo.png";
import call from "../../Assets/images/call.png";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./sidebar";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  const navLinks = [
    { title: "Services", url: "/services" },
    { title: "About Us", url: "/about" },
    { title: "Team", url: "/team" },
    { title: "Blog", url: "/blog" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className='w-full p-3 py-5'>
      <div className='flex justify-between items-center gap-4 container mx-auto'>
        <Link to='/'>
          <img className='w-28' src={logo} alt='' />
        </Link>

        <div className='sm:flex items-center gap-4 hidden'>
          {navLinks.map(({ title, url }, ind) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-gray-400 text-sm uppercase"
                  : isActive
                  ? "text-gray-700 text-sm uppercase"
                  : "text-gray-400 text-sm uppercase"
              }
              to={url}
              key={ind}
            >
              {title}
            </NavLink>
          ))}
        </div>
        <Link
          className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white md:flex items-center rounded-md p-3 gap-2 text-sm px-6 hidden justify-center'
          to='login'
        >
          <img src={call} alt='call' />
          Contact Us
        </Link>
        <BiMenuAltRight
          className='text-4xl text-pry sm:hidden cursor-pointer'
          onClick={openSidebar}
        />
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        navItems={navLinks}
      />
    </nav>
  );
};

export default Nav;
