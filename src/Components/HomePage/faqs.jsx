import React from "react";
import SingleFaq from "./singleFaq";

const Faqs = () => {
    const faqs = [
        {
            q: "What services do you offer?",
            a: "Our services include consultancy, cloud migration and optimisation, development and support, DevOps integration, and training.",
        },
        {
            q: "What is your pricing?",
            a: "Our pricing is project-based. We discuss your needs, evaluate them carefully, and then present a cost-effective budget to you.",
        },
        {
            q: "What is the delivery timeline?",
            a: "This depends on the project specifications as more complex projects typically take more time to complete. However, there will be a visible timeline with deliverables and milestones.",
        },
        {
            q: "How do we get started?",
            a: "We’re glad you’ve taken that step to work with us. The next step is to schedule a call with us through this “link”. This session will help our experts understand what solutions your business needs and how best SecureOps can intervene.",
        },
    ];
    return (
        <div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-20'>
            <h2 className='text-5xl font-bold leading-[4rem] mt-4'>
                Frequently Asked Questions
            </h2>
            <div>
                {faqs.map((item, ind) => (
                    <SingleFaq {...item} key={ind}/>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
