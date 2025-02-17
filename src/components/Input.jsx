import React, { forwardRef, useId } from "react";

const id = useId();
const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
  
) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={props.id}>
          {label}
        </label>

      )}
      <input type={type} id={id}
      className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`} ref={ref} {...props}/>
    </div>
  );
});

export default Input;
