import React, { useEffect, useRef, useState } from "react";
import {
  FaCartPlus,
  FaRegHeart,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useNavigate } from "react-router";
const ProductItem = ({ item }) => {
  // Navigate
  const navigate = useNavigate();
  const handleNavigateDetail = () => {
    navigate(`/detail/${item.id}`);
  };
  return (
    <>
      <div className="product-item">
        <div className="product-images">
          <img src={item.image} alt="" onClick={() => handleNavigateDetail()} />
          <div className="product-select">
            <span
              className="product-select--icon"
              // onClick={() => handleAddToCart(item)}
            >
              <FaCartPlus />
            </span>
            <span className="product-select--icon">
              <FaRegHeart />
            </span>
            <span
              className="product-select--icon"
              // onClick={(e, id) => handleModalP(e, item.id)}
            >
              <FaSearch />
            </span>
          </div>
        </div>
        <span className="product-seo">Sale</span>
        <div className="product-info">
          <h3 className="product-name" onClick={() => handleNavigateDetail()}>
            {item.name}
          </h3>
          <div className="product-price">
            <span className="product-price--new">${item.priceNew}</span>
            <span className="product-price--old">${item.priceOld}</span>
          </div>
          <div className="product-star">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
      {/* {show && <ModalProduct urlM={urlM} setShow={setShow} />} */}
    </>
  );
};

export default ProductItem;
