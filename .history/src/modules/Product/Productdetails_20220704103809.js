import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import Checkbox from "../Box/Checkbox";
import Count from "../Count/Count";
import Social from "../Media/Social";
import "./Productdetails.scss";

const Productdetails = React.memo(({ item }) => {
  const navigate = useNavigate();
  const handleBuyCart = (e) => {
    e.preventDefault();
    navigate(`/cart`);
  };
  return (
    <>
      <div className="productD--list">
        <div className="productD--left">
          <div className="productD--images">
            {/* <img
              src={currentImage}
              alt=""
              onClick={() => handleClickCurrent()}
            /> */}
          </div>
          <div className="productD--thumb">
            {/* {imgThumb &&
              imgThumb.length > 0 &&
              imgThumb.slice(0, 4).map((item) => (
                <div
                  className={`${
                    currentImage === item.images
                      ? "productD--imgThumb active-image"
                      : "productD--imgThumb"
                  } `}
                  key={item.id}
                  onClick={() => setCurrentImage(item.images)}
                >
                  <img src={item.images} alt="" />
                </div>
              ))} */}
          </div>
        </div>
        <div className="productD--right">
          <h3 className="productD--title">{item.name}</h3>
          <div className="productD--price">
            <span className="productD--priceNew">${item.priceNew}</span>
            <span className="productD--priceOld">${item.priceOld}</span>
          </div>
          <div className="productD--vote">
            <div className="productD--star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="productD--review"> review</div>
          </div>
          <div className="productD--desc">{item.content}</div>
          <div className="productD--cart">
            <div>
              <Count />
            </div>
            <button
              className="button button--secondary"
              // onClick={(e) => handleAddCart(e)}
            >
              Add to cart
            </button>
          </div>
          <div>
            <Checkbox>I agree with the terms and conditions</Checkbox>
          </div>
          <button className="productD-btn" onClick={(e) => handleBuyCart(e)}>
            Buy it now!
          </button>
          <div className="productD-social">
            Share: <Social />
          </div>
        </div>
      </div>
    </>
  );
});

export default Productdetails;
