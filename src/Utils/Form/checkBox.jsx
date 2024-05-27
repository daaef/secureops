import React from "react";

const TextInput = ({ id, title, setItem, check, setCheck }) => {
  return (
    <div className={`${check ? "flex gap-2 items-center" : "block"} my-2`}>
      <label className='text-black text-sm block font-medium' htmlFor={id}>
        {title}
      </label>

      <input name={id} type='checkbox' onChange={setItem} onClick={setCheck} />
    </div>
  );
};

export default TextInput;
