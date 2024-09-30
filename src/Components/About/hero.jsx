import React from "react";

const Hero = () => {
    return (
        <div className='container mx-auto flex items-center justify-center w-full relative my-10 p-4'>
            <div className='bg-[#E8F1FB80] p-8 max-w-lg w-full text-center shadow-2xl shadow-sky-100 z-10'>
                <h2 className='font-bold text-3xl'>About Us</h2>
                <p className='text-sm mt-3 text-[#636363]'>
                    We re an international cutting edge software solution provider, with focus on security
                    What sets us apart is our passion to empower organizations by providing the right solutions with ai
                    needed to strive in this digital age.
                    We are not just another tech company, we are you trusted partner to a secure and efficient development.
                </p>
            </div>
            <div
                className='bg-gray-[#B8D2F3] p-8 max-w-xs w-full text-center shadow-2xl shadow-sky-100 absolute top-2 translate-x-2 h-full opacity-50'/>
        </div>
    );
};

export default Hero;
