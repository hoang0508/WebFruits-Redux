import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import "./Social.scss";
const Social = () => {
  return (
    <div className="social">
      <div className="social-icon">
        <FaFacebookF />
      </div>
      <div className="social-icon">
        <FaTwitter />
      </div>
      <div className="social-icon">
        <FaPinterestP />
      </div>
      <div className="social-icon">
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Social;
