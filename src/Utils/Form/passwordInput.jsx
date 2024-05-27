import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className='relative'>
      <div>
        <label className='text-black text-sm block font-medium' htmlFor={id}>
          {title}
        </label>
        <input
          className={`block p-4 py-4 rounded-md my-2 w-full text-sm ${className}`}
          id={id}
          type={isPasswordVisible ? "text" : "password"}
          value={value}
          onChange={setItem}
          name={id}
          required={required}
          placeholder={placeholder}
          readOnly={readOnly}
          minLength={minLength}
        />
      </div>
      <i
        className='absolute bottom-4 cursor-pointer right-5 text-2xl text-gray-600'
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </i>
    </div>
  );
};

export default PasswordInput;
