import React from "react";
import styled from "styled-components";

const AuthenticationStyles = styled.div`
  min-height: 100vh;
  padding: 40px 0;
  .signup-content {
    text-align: center;
    margin-bottom: 40px;
  }
  .signup-heading {
    font-size: 35px;
    margin-bottom: 15px;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Authentication = ({ children }) => {
  return (
    <AuthenticationStyles>
      <div className="signup-content">
        <h3 className="signup-heading">Welcome back</h3>
        <span className="signup-desc">
          Welcome back! Please enter your home
        </span>
      </div>
      {children}
    </AuthenticationStyles>
  );
};

export default Authentication;
