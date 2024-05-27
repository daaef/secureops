import React from "react";
import tray from "../../Assets/images/tray.png";

const WhyChooseUs = () => {
    const arr = [
        {
            title: "Security",
            content:
                "Your security matters to us as much as it matters to you. SecureOps emphasizes the importance of a robust and efficient security system but that’s not all. We customize and integrate the system as well",
        },
        {
            title: "Collaboration and Efficiency",
            content:
                "Our collaborative approach fosters efficiency and innovation, ensuring that your projects are delivered on time and within budget.",
        },
        {
            title: "Cutting-Edge Solutions",
            content:
                "We stay at the forefront of technology trends and security best practices, providing you with the latest and most effective solutions.",
        },
    ];
    return (
        <div className='my-20 container mx-auto p-4'>
            <h2 className='font-bold text-3xl text-gray-800 text-center'>
                Our Core Values
            </h2>
            <p className='my-6 text-[#636363] text-center max-w-2xl mx-auto'>
                We believe in collaboration and teamwork, bringing together experts in
                DevOps, cybersecurity, and technology to ensure your projects are
                managed professionally and securely. With SecureOps as your partner, you
                can expect:
            </p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
                {arr.map(({title, content}, ind) => (
                    <div key={ind}>
                        <img src={tray} alt='tray'/>
                        <h2 className='my-3 font-bold text-gray-800 text-xl'>{title}</h2>
                        <p className='my-6 text-[#636363]'>{content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
