import React from "react";

const CoreValues = () => {
  const arr = [
    {
      title: "Security",
      content:
        "Security is the foundation of our services. We prioritize the safety of your digital assets, ensuring that your applications and data are shielded from threats and vulnerabilities.",
    },
    {
      title: "Professionalism",
      content:
        " We approach each project with the highest level of professionalism. Our team of experts is committed to delivering solutions that are efficient, reliable, and tailored to your unique needs.",
    },
    {
      title: "Innovation",
      content:
        "Innovation is in our DNA. We harness the power of technology to drive results, embracing the latest advancements to help your organization stay competitive and agile.",
    },
  ];
  return (
    <div className='bg-sky-50'>
      <div className='mx-auto container p-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20'>
        <div>
          <h2 className='font-bold text-3xl text-gray-800'>Our Core Values</h2>
          <p className='my-6 text-[#636363]'>
            At SecureOps, our core values drive everything we do. These values
            reflect our unwavering commitment to our clients and our dedication
            to excellence
          </p>
        </div>
        <div>
          {arr.map(({ title, content }, ind) => (
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
