import React, { useState } from "react";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./Review.scss";
const Info = ({ item }) => {
  const [tab, setTab] = useState(1);
  const handleClickTab = (index) => {
    setTab(index);
  };
  return (
    <div className="info">
      <div className="container">
        <div className="info-tab">
          <div
            className={`${
              tab === 1 ? " info-tab--title active-tabs" : "info-tab--title"
            }`}
            onClick={() => handleClickTab(1)}
          >
            Description
          </div>
          <div
            className={`${
              tab === 2 ? "info-tab--title active-tabs" : "info-tab--title"
            }`}
            onClick={() => handleClickTab(2)}
          >
            Review
          </div>
        </div>
        <div className="info-content">
          <div
            className={`${
              tab === 1
                ? "info-content--desc active-content"
                : "info-content--desc"
            }`}
          >
            {item.content}
          </div>
          <div
            className={`${
              tab === 2
                ? "info-content--review active-content"
                : "info-content--review"
            }`}
          >
            <h3 className="info__heading">Customer Review</h3>
            <div className="info-customer__list">
              {/* {review &&
                review.length > 0 &&
                review.map((item) => (
                  <div className="info-customer__item" key={item.id}>
                    <div className="info-customer__people">
                      <div className="info-customer__image">
                        <img src={item.avatar} alt="" />
                      </div>
                      <h3 className="info-customer__name">{item.name}</h3>
                    </div>
                    <div className="info-customer__date">
                      {new Date(item.createdAt).toLocaleString()}
                    </div>
                    <div className="info-customer__desc">{item.content}</div>
                    <div className="info-customer__star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                ))} */}
            </div>
            <WriteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const WriteForm = () => {
  return (
    <div className="write">
      <h3 className="info__heading">Write A Review</h3>
      <form action="#" className="write-form">
        <div className="write-form--group">
          <input type="text" className="write-form--input" />
          <input type="email" className="write-form--input" />
        </div>
        <div className="write-form--group">
          <input type="text" className="write-form--input" />
        </div>
        <div className="write-form--group">
          <textarea cols="30" rows="7" className="write-form--textarea" />
        </div>
        <button className="button button--secondary">Submit Review</button>
      </form>
    </div>
  );
};

export default Info;
