import React from "react";

const Select = ({ onChange, children, ...props }) => {
  return (
    <>
      <select
        className="w-[200px] p-[5px] border cursor-pointer border-gray-300 rounded-md"
        onChange={onChange}
        {...props}
      >
        {children}
      </select>
    </>
  );
};

export default Select;
