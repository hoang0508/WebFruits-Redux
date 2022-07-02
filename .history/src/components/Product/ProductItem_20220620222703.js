import { useAuthContext } from "components/context/Auth-Context";
import React, { useEffect, useRef, useState } from "react";
import {
  FaCartPlus,
  FaRegHeart,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import ModalProduct from "../Modal/ModalProduct";
const ProductItem = ({ item }) => {
  const [urlM, setUrlM] = useState(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products`
  );
  const [show, setShow] = useState(false);
  const handleModalP = (e, id) => {
    e.preventDefault();
    setUrlM(
      `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products/${id}`
    );
    setShow(!show);
  };
  // click outside
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef?.current && !modalRef?.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  // Navigate
  const navigate = useNavigate();
  const handleNavigateDetail = () => {
    navigate(`/detail/${item.id}`);
  };
  // useContext
  const { addToCart, count } = useAuthContext();
  console.log(
    "🚀 ~ file: ProductItem.js ~ line 42 ~ ProductItem ~ count",
    count
  );
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <>
      <div className="product-item" ref={modalRef}>
        <div className="product-images">
          <img
            src={item.images}
            alt=""
            onClick={() => handleNavigateDetail()}
          />
          <div className="product-select">
            <span
              className="product-select--icon"
              onClick={() => handleAddToCart(item)}
            >
              <FaCartPlus />
            </span>
            <span className="product-select--icon">
              <FaRegHeart />
            </span>
            <span
              className="product-select--icon"
              onClick={(e, id) => handleModalP(e, item.id)}
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
      {show && <ModalProduct urlM={urlM} setShow={setShow} />}
    </>
  );
};

export default ProductItem;
