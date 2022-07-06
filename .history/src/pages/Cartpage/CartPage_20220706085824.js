import Count from "components/Count/Count";
import React from "react";
import bannerCart from "../../assets/img/page-banner-3.jpg";
import "./CartPage.scss";
const CartPage = () => {
  return (
    <div className="cart">
      <div
        className="details-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="details-heading  heading-page">Cart page</h3>
      </div>
      <div className="cart-main">
        <div className="container">
          <div className="cart-main--left">
            <div className="flex gap-x-3 items-center">
              <div>
                <img
                  src=""
                  alt=""
                  className="w-[120px] h-[120px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Strawberry</h3>
                <span className="text-gray-300 text-base mb-2 inline-block">
                  $14.00
                </span>
                <Count />
              </div>
            </div>
            <div></div>
          </div>
          <div className="cart-main--right"></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
