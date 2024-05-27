import React from "react";
import bar from "../../Assets/images/bar.png";

const Allservices = () => {
    const services = [
        {
            title: "DevOps as a Service (DaS)",
            content:
                "Free your team to focus on innovation while we take care of the operational aspects, ensuring a secure and efficient DevOps pipeline.",
        },
        {
            title: "Security Consulting and Implementation",
            content:
                "We identify vulnerabilities, design robust security measures, and ensure their effective integration throughout your development pipeline.",
        },
        {
            title: "Agile Project Management",
            content:
                "Our agile project management experts ensure that your projects are executed efficiently as we adapt to evolving requirements.",
        },
        {
            // title: "Cloud Computing Migration and Support",
            title: "Cloud Migration and Support",
            content:
                "We assist in seamless migration to cloud environments and provide continuous support to optimize your cloud infrastructure.",
        },
        {
            title: "DevOps Consulting and Implementation",
            content:
                "SecureOps provides expert guidance and implementation services for adopting DevOps practices in your company.",
        },
        {
            title: "Continuous Integration and Continuous Delivery (CI/CD)",
            content:
                "Reap the benefits of rapid, error-free deployments, reduced manual intervention, and improved collaboration among development and operations teams.",
        },
        {
            title: "Business Improvement",
            content:
                "Beyond technology, we focus on enhancing your overall business operations. SecureOps identifies bottlenecks in your business processes as well as improvement opportunities.",
        },
        // {
        //     title: "Infrastructure as Code (IaC)",
        //     content:
        //         "Embrace Infrastructure as Code to automate provisioning and manage infrastructure efficiently. SecureOps helps you adopt IaC practices, allowing you to treat your infrastructure like software.",
        // },
        {
            title: "Automated Security Testing",
            content:
                "Security is paramount in today’s digital landscape. We implement automated security testing to identify vulnerabilities early in the development process.",
        },
        {
            title: "Training",
            content:
                "We will hold your hand through the process of adapting to new solutions curated to scale your business immensely.",
        },
    ];
    return (
        <div className='my-20 container mx-auto p-4'>
            <h2 className='font-bold text-3xl'>
                SecureOps <br/> Service Offerings
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
                {services.map(({title, content}, ind) => (
                    <div
                        key={ind}
                        className='p-4 rounded-md bg-gray-50 shadow-xl shadow-gray-100'
                    >
                        <img src={bar} alt='bar'/>
                        <h2 className='font-bold text-gray-800 my-2'>{title}</h2>
                        <h2 className='text-sm text-[#636363]'>{content}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Allservices;
