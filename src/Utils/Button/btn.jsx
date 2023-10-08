import React from "react";
import { Spinner } from "react-activity";

const Btn = ({ text, className, onClick, loadingState }) => {
  return (
    <button
      className={`p-3 shadow-xl font-medium px-8 rounded-md hover:scale-95 whitespace-nowrap w-fit text-sm bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white ${className} flex justify-center`}
      onClick={onClick}
      disabled={loadingState}
    >
      {loadingState ? <Spinner /> : text}
    </button>
  );
};

export default Btn;
