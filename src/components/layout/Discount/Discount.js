import React from "react";
import discountBgr from "../../../assets/img/overview-bg.jpg";
import "./Discount.scss";
import { FaYoutube } from "react-icons/fa";
const Discount = () => {
  return (
    <section
      className="banner-fixed discount"
      style={{ backgroundImage: `url(${discountBgr})` }}
    >
      <div className="container">
        <div className="discount-content">
          <div className="discount-content--left">
            <h3 className="discount-content--heading">50% Off In This Week</h3>
            <div className="discount-content--desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse
            </div>
            <button className="button button--secondary">Discover Now</button>
          </div>
          <div className="discount-content--right">
            <div className="fade-loading">
              <FaYoutube className="discount-content--icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
