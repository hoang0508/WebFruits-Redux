import React, { useEffect, useRef, useState } from "react";
import {
  FaCartPlus,
  FaRegHeart,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { productStatus } from "utils/contains";
const ProductItem = ({ item }) => {
  // Navigate
  const navigate = useNavigate();
  const handleNavigateDetail = () => {
    navigate(`/details/${item.id}`);
  };
  return (
    <>
      <div
        className="product-item"
        onClick={() => handleNavigateDetail(item.id)}
      >
        <div className="product-images">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            onClick={() => handleNavigateDetail()}
          />
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
        <span className="product-seo">
          {item.status === productStatus.PRODUCT_SALE && "Sale"}
          {item.status === productStatus.PRODUCT_NEW && "New"}
          {item.status === productStatus.PRODUCT_HOT && "Hot"}
        </span>
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
