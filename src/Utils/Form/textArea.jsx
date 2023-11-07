import React from "react";

const TextArea = ({
  id,
  title,
  setItem,
  value,
  check,
  placeholder,
  className,
  required,
}) => {
  return (
    <div className={`${check ? "flex gap-2 items-center" : "block"} my-2`}>
      <label className='text-black text-sm block font-medium' htmlFor={id}>
        {title}
      </label>

      <textarea
        className={`w-full rounded-md block p-4 my-2 text-sm ${className}`}
        name={id}
        id=''
        cols='30'
        rows='4'
        value={value}
        onChange={setItem}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
