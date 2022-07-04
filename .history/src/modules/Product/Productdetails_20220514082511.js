import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useNavigate } from "react-router";
import Checkbox from "../Box/Checkbox";
import { useAuthContext } from "../context/Auth-Context.js";
import Count from "../Count/Count";
import Social from "../Media/Social";
import "./Productdetails.scss";

const Productdetails = React.memo(({ item }) => {
  // useImageContext
  const { imgThumb, currentImage, setCurrentImage, addToCart, cartItem } =
    useAuthContext();

  const id = cartItem
    .map((item) => item.id)
    .filter((id) => id === item.id)
    .join();

  const count = cartItem.flatMap((item) => item.count);

  // index photo
  const [photoIndex, setPhotoIndex] = useState(0);
  // open
  const [isOpen, setIsOnpen] = useState(false);
  // images thumb
  const imagesThumb =
    imgThumb &&
    imgThumb.length > 0 &&
    imgThumb.slice(0, 4).map((item) => item.images);
  // handleclickCurrent
  const handleClickCurrent = () => {
    const indexImg = imagesThumb.findIndex((item) => item === currentImage);
    setPhotoIndex(indexImg);
    setIsOnpen(true);
  };
  //
  const navigate = useNavigate();
  const handleAddCart = (e) => {
    e.preventDefault();
    addToCart(item);
  };
  const handleBuyCart = (e) => {
    e.preventDefault();
    navigate(`/cart`);
  };
  return (
    <>
      <div className="productD--list">
        <div className="productD--left">
          <div className="productD--images">
            <img
              src={currentImage}
              alt=""
              onClick={() => handleClickCurrent()}
            />
          </div>
          <div className="productD--thumb">
            {imgThumb &&
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
              ))}
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
              <Count count1={item.id === id ? count : 1} />
            </div>
            <button
              className="button button--secondary"
              onClick={(e) => handleAddCart(e)}
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
      {isOpen && (
        <Lightbox
          mainSrc={imagesThumb[photoIndex]}
          nextSrc={imagesThumb[(photoIndex + 1) % imagesThumb.length]}
          prevSrc={
            imagesThumb[
              (photoIndex + imagesThumb.length - 1) % imagesThumb.length
            ]
          }
          onCloseRequest={() => setIsOnpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              () => (photoIndex + imagesThumb.length - 1) % imagesThumb.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              () => (photoIndex + imagesThumb.length + 1) % imagesThumb.length
            )
          }
        />
      )}
    </>
  );
});

export default Productdetails;
