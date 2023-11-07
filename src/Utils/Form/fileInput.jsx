import React from "react";

const TextInput = ({
  id,
  title,
  setItem,
  value,
  check,
  className,
  required,
  readOnly,
}) => {
  return (
    <div className={`${check ? "flex gap-2 items-center" : "block"} my-2`}>
      <label className='text-black text-sm block font-medium' htmlFor={id}>
        {title}
      </label>

      <input
        className={`block p-1 rounded-md my-2 w-full text-sm ${className}`}
        id={id}
        type='file'
        value={value}
        onChange={setItem}
        name={id}
        required={required}
        readOnly={readOnly}
        accept='image/*'
      />
    </div>
  );
};

export default TextInput;
