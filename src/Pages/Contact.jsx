import React from "react";
import Faqs from "../Components/HomePage/faqs";
import Hero from "../Components/Contact/hero";
import Address from "../Components/Contact/address";
import ContactForm from "../Components/Contact/contactForm";
import Ctx from "../Components/HomePage/cta";

const Contact = () => {
  return (
    <div>
      <Hero />
      <div className='mx-auto container p-4 grid gap-8 grid-cols-1 md:grid-cols-2 my-10 mt-20'>
        <div>
          <h2 className='font-bold text-2xl text-gray-700'>
            {" "}
            <span className='text-gray-300 block'>Still have</span> some
            questions?
          </h2>
          <Address />
        </div>
        <ContactForm />
      </div>
      <Faqs />
      <Ctx />
    </div>
  );
};

export default Contact;
