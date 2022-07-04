import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    width: 35px;
    height: 35px;
    border: 4px solid ${(props) => props.theme.border};
    border-top: 4px solid transparent;
    border-radius: 100rem;
    animation: loading 2s infinite linear;
    @keyframes loading {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
const Button = ({
  type = "",
  children,
  className = "",
  maxWidth = "",
  height = "",
  onClick = () => {},
  ...props
}) => {
  const { isLoading, to } = props;
  console.log("🚀 ~ file: Button.js ~ line 38 ~ props", props);
  if (typeof to === "string") {
    return (
      <NavLink to={to}>
        <ButtonStyles
          type={type}
          maxWidth={maxWidth}
          height={height}
          className={className}
          onClick={onClick}
          {...props}
        >
          {isLoading ? <div className="loading"></div> : children}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles
      type={type}
      maxWidth={maxWidth}
      height={height}
      className={className}
    >
      {isLoading ? <div className="loading"></div> : children}
    </ButtonStyles>
  );
};

export default Button;
