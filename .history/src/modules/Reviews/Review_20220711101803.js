import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./Review.scss";
const Review = ({ item }) => {
  const [tab, setTab] = useState(1);
  const handleClickTab = (index) => {
    setTab(index);
  };

  // id
  const { id } = useParams();
  // userInfo
  const userInfo = useSelector((state) => state.users.userInfo);

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
            {/* {item.content} */}
          </div>
          <div
            className={`${
              tab === 2
                ? "review-content--review active-content"
                : "review-content--review"
            }`}
          >
            <h3 className="review__heading">List review</h3>
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
  // useForm
  const { handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      content: "",
      h: "",
    },
  });
  const handleSubmitReview = (values) => {
    console.log(
      "🚀 ~ file: Review.js ~ line 99 ~ handleSubmitReview ~ values",
      values.content
    );
  };
  return (
    <div className="write">
      <h3 className="review__heading">Write A review</h3>
      <form className="write-form" onSubmit={handleSubmit(handleSubmitReview)}>
        <input type="text" name="hh" />
        <div className="write-form--group">
          <textarea
            cols="30"
            rows="7"
            className="write-form--textarea"
            name="content"
          />
        </div>
        <button type="submit" className="button button--secondary">
          Submit review
        </button>
      </form>
    </div>
  );
};

export default Review;
