import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import call from "../../Assets/images/call.png";

const Sidebar = ({ isSidebarOpen, closeSidebar, navItems }) => {
  const navigateTo = useNavigate();
  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed w-full h-screen bg-white top-0 right-0 transition p-8 lg:hidden z-20`}
    >
      <div className='flex justify-between items-center'>
        <img
          onClick={() => {
            navigateTo("/");
            closeSidebar();
          }}
          src={logo}
          className='w-24'
          alt=''
        />
        <i onClick={closeSidebar} className='text-2xl flex justify-end'>
          <MdOutlineClose className='' />
        </i>
      </div>
      <div className='flex flex-col gap-6 my-10'>
        {navItems.map(({ url, title }, index) => {
          return (
            <NavLink
              key={index}
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-gray-400 whitespace-nowrap text-lg border-b-2 py-4 uppercase"
                  : isActive
                  ? "text-gray-700 whitespace-nowrap text-lg border-b-2 py-4 uppercase"
                  : "text-gray-500 whitespace-nowrap text-lg border-b-2 py-4 uppercase"
              }
              to={url}
              onClick={closeSidebar}
            >
              {title}
            </NavLink>
          );
        })}
      </div>

      <Link
        className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white flex items-center rounded-md p-3 gap-2 text-sm px-6 w-fit'
        to='contact'
      >
        <img src={call} alt='call' />
        Contact Us
      </Link>
      <img
        src={logo}
        className='w-96 absolute bottom-0 right-0 opacity-10'
        alt=''
      />
    </aside>
  );
};

export default Sidebar;
