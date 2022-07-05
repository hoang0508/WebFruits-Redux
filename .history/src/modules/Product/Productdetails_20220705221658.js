import Checkbox from "components/Box/Checkbox";
import Count from "components/Count/Count";
import Social from "components/Media/Social";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Productdetails.scss";
import parse from "html-react-parser";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "firebases/Firebase-config";

const Productdetails = React.memo(() => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.products.dataDetails);

  const { count } = useSelector((state) => state.count);
  const handleAddToCart = async (data) => {
    const colRef = collection(db, "cart");
    const { id, name, image, priceNew } = data;
    await addDoc(colRef, {
      // ...data,
      id,
      name,
      image,
      count,
      priceNew,
      totalPrice: count * data.priceNew,
    });
  };
  return (
    <>
      <div className="productD--list">
        <div className="productD--left">
          <div className="productD--images">
            <img
              src={data.image}
              alt=""
              // onClick={() => handleClickCurrent()}
            />
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
          <h3 className="productD--title">{data.name}</h3>
          <div className="productD--price">
            <span className="productD--priceNew">${data.priceNew}</span>
            <span className="productD--priceOld">${data.priceOld}</span>
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
          <div className="productD--desc">{parse(data.content || "")}</div>
          <div className="productD--cart">
            <div>
              <Count />
            </div>
            <button
              className="button button--secondary"
              onClick={() => handleAddToCart(data)}
            >
              Add to cart
            </button>
          </div>
          <div>
            <Checkbox>I agree with the terms and conditions</Checkbox>
          </div>
          <button className="productD-btn">Buy it now!</button>
          <div className="productD-social">
            Share: <Social />
          </div>
        </div>
      </div>
    </>
  );
});

export default Productdetails;
