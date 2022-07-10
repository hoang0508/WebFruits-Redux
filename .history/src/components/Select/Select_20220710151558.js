import React from "react";
import styled from "styled-components";

const SelectStyles = styled.select`
  ::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 3px;
    background-color: #ff6651;
  }
`;

const Select = ({ onChange, children, ...props }) => {
  return (
    <>
      <SelectStyles
        className="w-[200px] p-[5px] border cursor-pointer border-gray-300 rounded-md"
        onChange={onChange}
        {...props}
      >
        {children}
      </SelectStyles>
    </>
  );
};

export default Select;
