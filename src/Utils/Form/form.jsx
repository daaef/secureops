import React from "react";

const Form = ({ onSubmit, children, className }) => {
  return (
    <form
      action=''
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
