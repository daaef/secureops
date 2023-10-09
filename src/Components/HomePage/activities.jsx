import React from "react";
import ai from "../../Assets/images/ai.png";
import security from "../../Assets/images/security.png";

const Activities = () => {
  return (
    <div className='p-4 mx-auto max-w-5xl'>
      <div className='grid mb-20 grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div>
          <h2 className='text-5xl font-bold leading-[4rem]'>
            Embracing AI Innovation
          </h2>
          <p className='mt-5'>
            With the integration of advanced AI technology into our team, we are
            elevating our services to a new realm of efficiency and
            sophistication. Our utilization of cutting-edge technology is geared
            towards delivering unparalleled results at an unprecedented pace,
            setting a new standard for excellence in our offerings.
          </p>
        </div>
        <img src={ai} alt='ai' />
      </div>
      <div className='flex flex-col-reverse md:flex-row my-20 gap-8 items-center'>
        <img src={security} alt='ai' />
        <div className='md:w-[50%]'>
          <h2 className='text-5xl font-bold leading-[4rem]'>
            Security structure of DevOps
          </h2>
          <p className='mt-5'>
            DevOps Security is a collaborative approach that involves
            developers, security engineers, and IT operations teams working
            together to build secure software. By integrating security into the
            devops pipeline, organizations can reduce risk of security
            vulnerabilities being introduced into their software and can improve
            their overall security posture
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
