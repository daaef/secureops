import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo-white.png";
import x from "../../Assets/images/x.png";
import ln from "../../Assets/images/in.png";
import ig from "../../Assets/images/ig.png";
import call from "../../Assets/images/call.png";
import { BsArrowRightCircle } from "react-icons/bs";

const Footer = () => {
  const social = [
    { img: x, title: "Twitter/X", link: "" },
    { img: ig, title: "Instagram", link: "" },
    { img: ln, title: "LinkedIn", link: "" },
  ];
  return (
    <footer className='bg-black text-gray-200 p-5 py-10 md:py-20'>
      <div className='mx-auto container grid grid-cols-1 md:grid-cols-3 gap-12'>
        <div>
          <img src={logo} className='w-40' alt='' />
          <div
            className='border-2 text-white flex items-center rounded-md p-3 gap-2 text-sm px-8 mt-10 w-fit cursor-pointer select-none justify-center'
            to='login'
          >
            <img src={call} alt='call' />
            Schedule a Call
          </div>
        </div>
        <div>
          <h2 className='text-base text-gray-400'>Social</h2>
          {social.map(({ img, title, link }, ind) => (
            <a
              className='flex items-center gap-2 my-4'
              href={link}
              target='__blank'
              key={ind}
            >
              <img src={img} alt={title} />
              <h2>{title}</h2>
            </a>
          ))}
        </div>
        <div>
          <h2 className='text-base text-gray-400 mb-4'>Mailing List</h2>
          <p className='text-sm'>Stay up to date on our offering.</p>
          <div className='my-4 relative'>
            <input
              type='email'
              name=''
              id=''
              placeholder='enter your email'
              className='bg-transparent border-b-[1px] w-full p-2'
            />
            <BsArrowRightCircle className='absolute bottom-2 right-2 text-xl' />
          </div>
          <p className='text-sm'>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>
      <div className='mx-auto container flex  gap-4 flex-col sm:flex-row items-center justify-between mt-32 text-gray-400 text-sm'>
        <h2>© SecureOps Solutions LLC</h2>
        <div className='flex gap-8'>
          <Link>Privacy Policy</Link>|<Link>Terms and Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
