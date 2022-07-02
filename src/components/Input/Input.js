import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme.border};
    padding: 15px;
    border-radius: 4px;
    transition: all 0.25s linear;

    &:focus {
      background-color: ${(props) => props.theme.bgColor};
      border-color: ${(props) => props.theme.primary};
    }
  }
  .input-icon {
    width: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;
  }
`;

const Input = ({
  name = "",
  placeholder = "",
  type = "",
  children,
  control,
  ...props
}) => {
  const { field } = useController({ defaultValue: "", name, control });
  return (
    <InputStyles>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        {...field}
        {...props}
      />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};

export default Input;
