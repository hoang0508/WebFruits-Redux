import React from "react";
import styled from "styled-components";
import { FaGooglePlusG, FaFacebookF, FaTwitter } from "react-icons/fa";

const Socialstyle = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  .social-share-icon {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .social-share-text {
    color: white;
    margin-left: 20px;
    font-size: 16px;
  }

  .social-share-item {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .social-share-item.facebook {
    background-color: #3b5999;
  }

  .social-share-item.facebook .social-share-icon {
    color: #3b5999;
  }

  .social-share-item.instagram {
    background-color: #e4405f;
  }

  .social-share-item.instagram .social-share-icon {
    color: #e4405f;
  }

  .social-share-item.twitter {
    background-color: #55acee;
  }

  .social-share-item.twitter .social-share-icon {
    color: #55acee;
  }

  .social-share-item + .social-share-item {
    margin-top: 20px;
  }
`;

const Social = ({ onClick = () => {} }) => {
  return (
    <Socialstyle>
      <button className="social-share-item instagram" onClick={onClick}>
        <FaGooglePlusG className="fab fa-instagram social-share-icon" />
        <span className="social-share-text">Sign in Google</span>
      </button>
      <button className="social-share-item facebook">
        <FaFacebookF className="fab fa-facebook social-share-icon" />
        <span className="social-share-text">Sign in Facebook</span>
      </button>
      <button className="social-share-item twitter">
        <FaTwitter className="fab fa-twitter social-share-icon" />
        <span className="social-share-text">Sign in Twitter</span>
      </button>
    </Socialstyle>
  );
};

export default Social;
