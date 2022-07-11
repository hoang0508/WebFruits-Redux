import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./Review.scss";
const Review = ({ item }) => {
  const [tab, setTab] = useState(1);
  const handleClickTab = (index) => {
    setTab(index);
  };
  return (
    <div className="review">
      <div className="container">
        <div className="review-tab">
          <div
            className={`${
              tab === 1 ? " review-tab--title active-tabs" : "review-tab--title"
            }`}
            onClick={() => handleClickTab(1)}
          >
            Description
          </div>
          <div
            className={`${
              tab === 2 ? "review-tab--title active-tabs" : "review-tab--title"
            }`}
            onClick={() => handleClickTab(2)}
          >
            review
          </div>
        </div>
        <div className="review-content">
          <div
            className={`${
              tab === 1
                ? "review-content--desc active-content"
                : "review-content--desc"
            }`}
          >
            {item.content}
          </div>
          <div
            className={`${
              tab === 2
                ? "review-content--review active-content"
                : "review-content--review"
            }`}
          >
            <h3 className="review__heading">Customer review</h3>
            <div className="review-customer__list">
              {/* {review &&
                review.length > 0 &&
                review.map((item) => (
                  <div className="review-customer__item" key={item.id}>
                    <div className="review-customer__people">
                      <div className="review-customer__image">
                        <img src={item.avatar} alt="" />
                      </div>
                      <h3 className="review-customer__name">{item.name}</h3>
                    </div>
                    <div className="review-customer__date">
                      {new Date(item.createdAt).toLocaleString()}
                    </div>
                    <div className="review-customer__desc">{item.content}</div>
                    <div className="review-customer__star">
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
      <h3 className="review__heading">Write A review</h3>
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
        <button className="button button--secondary">Submit review</button>
      </form>
    </div>
  );
};

export default Review;
