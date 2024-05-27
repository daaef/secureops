import React from "react";
import ai from "../../Assets/images/ai.png";
import call from "../../Assets/images/call.png";
import {Link} from "react-router-dom";

const WhoWeAre = () => {
    return (
        <div className='my-20 mx-auto container p-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <img className='w-full' src={ai} alt=''/>
            <div>
                <h2 className='text-3xl text-gray-800 font-bold'>Who We Are</h2>
                <p className='my-6 text-[#636363]'>
                    We are not just another tech company, we are your trusted partner in your journey to secure and
                    efficient development.
                </p>
                <div
                    className='flex justify-between p-8 bg-gray-50 rounded-md shadow-xl shadow-gray-100 border-[1px] border-gray-100'>
                    <div className='text-center'>
                        <h2 className='text-4xl text-gray-800 font-bold'>212</h2>
                        <p className='text-[#636363]'>Projects</p>
                    </div>
                    {/*<div className='text-center'>*/}
                    {/*  <h2 className='text-4xl text-gray-800 font-bold'>100</h2>*/}
                    {/*  <p className='text-[#636363]'>Stats here</p>*/}
                    {/*</div>*/}
                    {/*<div className='text-center'>*/}
                    {/*  <h2 className='text-4xl text-gray-800 font-bold'>100</h2>*/}
                    {/*  <p className='text-[#636363]'>Stats here</p>*/}
                    {/*</div>*/}
                </div>
                <Link
                    className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white md:flex items-center rounded-md p-3 gap-2 text-sm px-6 hidden justify-center w-fit mt-6 '
                    to='contact'
                >
                    <img src={call} alt='call'/>
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default WhoWeAre;
