import React from "react";

const TextInput = ({
  id,
  title,
  type,
  setItem,
  value,
  placeholder,
  className,
  required,
  readOnly,
  minLength,
}) => {
  return (
    <div>
      <label className='text-black text-sm block font-medium' htmlFor={id}>
        {title}
      </label>
      <input
        className={`block p-4 py-4 rounded-md my-2 w-full text-sm ${className}`}
        id={id}
        type={type}
        value={value}
        onChange={setItem}
        name={id}
        required={required}
        placeholder={placeholder}
        readOnly={readOnly}
        minLength={minLength}
      />
    </div>
  );
};

export default TextInput;
