import React from "react";
import banner from "../../assets/img/banner.jpg";
import "./Banner.scss";
const Banner = () => {
  return (
    <section
      className="banner banner-fixed"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="banner-content">
        <div className="banner-heading">Take Natural Taste From Our Shop</div>
        <div className="banner-title">Organic Food Is Good For Health</div>
        <p className="banner-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </p>
        <div className="banner-btn">
          <button className="button button--secondary">Our Shop</button>
          <button className="button button--primary">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
