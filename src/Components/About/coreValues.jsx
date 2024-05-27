import React from "react";

const CoreValues = () => {
    const arr = [
        {
            title: "Customer focus",
            content:
                "Our clientele is our heart. We center every solution on your unique needs, ensuring unparalleled customer satisfaction.",
        },
        {
            title: "Security",
            content:
                "Security is the foundation of our services. At SecureOps, we prioritize the safety and privacy of your digital assets, ensuring that your data is bulletproof to threats and vulnerabilities.",
        },
        {
            title: "Transparency",
            content:
                "We believe in openness and clarity. SecureOps commits to transparent processes, fostering trust and communication at every stage of our collaboration.",
        },
        {
            title: "Integrity",
            content:
                "Trust is an essential part of our partnership. SecureOps upholds the highest standards of integrity, ensuring honesty and reliability in all our interactions.\n",
        },
        {
            title: "Collaboration",
            content:
                "Together, we can achieve more. SecureOps considers collaboration as an essential factor in amplifying innovation and driving success.",
        }
    ];
    return (
        <div className='bg-sky-50'>
            <div className='mx-auto container p-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20'>
                <div>
                    <h2 className='font-bold text-3xl text-gray-800'>Our Core Values</h2>
                    <p className='my-6 text-[#636363]'>
                        Our operations are driven and guided by our core values. These values reflect our dedication and
                        unwavering commitment to our clients.
                    </p>
                </div>
                <div>
                    {arr.map(({title, content}, ind) => (
                        <div
                            key={ind}
                            className='my-8 border-b-[#1A6ED8] border-b-[1px] pb-4'
                        >
                            <h2 className='font-bold text-2xl text-gray-800'>{title}</h2>
                            <p className='my-2 text-[#636363]'>{content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
