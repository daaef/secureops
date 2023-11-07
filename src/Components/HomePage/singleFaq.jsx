import React, { useState } from "react";

const SingleFaq = ({ a, q }) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  return (
    <div className='my-4'>
      <h2
        className='flex items-center gap-3 select-none cursor-pointer text-lg'
        onClick={() => setIsAnswerShown(!isAnswerShown)}
      >
        <span className='text-2xl'> {isAnswerShown ? "-" : "+"} </span> {q}
      </h2>
      <h2
        className={`ml-5 border-l-2 border-l-black pl-4 text-sm mt-2 transition duration-500 ease-in-out overflow-hidden ${
          isAnswerShown ? "block" : "hidden"
        }`}
      >
        {a}
      </h2>
    </div>
  );
};

export default SingleFaq;
