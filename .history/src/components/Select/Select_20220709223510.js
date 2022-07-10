import React from "react";

const Select = ({ onChange, ...props }) => {
  return (
    <>
      <select
        className="w-[200px] p-[5px] border cursor-pointer border-gray-300 rounded-md"
        onChange={onChange}
        {...props}
      ></select>
    </>
  );
};

export default Select;
