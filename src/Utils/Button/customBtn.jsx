import React from "react";
import { Spinner } from "react-activity";

const CustomBtn = ({ text, className, onClick, loadingState }) => {
  return (
    <button
      className={`p-3 shadow-xl font-medium px-8 rounded-md hover:scale-95 whitespace-nowrap w-fit text-sm ${className} flex justify-center`}
      onClick={onClick}
      disabled={loadingState}
    >
      {loadingState ? <Spinner /> : text}
    </button>
  );
};

export default CustomBtn;
