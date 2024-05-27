import React from "react";

const TextInput = ({
  id,
  title,
  data,
  setItem,
  value,
  className,
  required,
}) => {
  return (
    <div className={`block my-2`}>
      <label className='text-black text-sm block font-medium' htmlFor={id}>
        {title}
      </label>
      <select
        className={`w-full rounded-md block p-4 py-4 my-2 text-sm ${className}`}
        name={id}
        id=''
        onChange={setItem}
        value={value}
        required={required}
      >
        {data.map((item, id) => {
          return (
            <option key={id} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TextInput;
