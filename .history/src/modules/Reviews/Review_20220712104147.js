import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./Review.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import { getDataReview } from "redux/reviews/reviewSlice";
import parse from "html-react-parser";
import { Button } from "components/button";
import { AiTwotoneLike } from "react-icons/ai";
const Review = () => {
  const [tab, setTab] = useState(1);
  const handleClickTab = (index) => {
    setTab(index);
  };

  // id
  const { id } = useParams();
  // userInfo
  const userInfo = useSelector((state) => state.users.userInfo);

  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataReview());
  }, [dispatch]);

  const review = useSelector((state) => state.reviews.dataReview);
  // filter kiểm tra idProduct = id
  const data = review.filter((item) => item.idProduct === id);

  //
  const [like, setLike] = useState(0);
  const [toggleLike, setToggleLike] = useState(false);
  const handleClickLike = async () => {
    setToggleLike(!toggleLike);
    // if (like > 2 && data?.username === userInfo?.displayName) {
    //   return;
    // }
    if (toggleLike) {
      setLike((like) => like - 1);
    } else {
      setLike((like) => like + 1);
    }
  };

  useEffect(() => {
    const addLikeDB = async () => {
      if (like !== 0 && like === true) {
        let colRef = collection(db, "like");
        await addDoc(colRef, {
          ...data,
          like,
        });
      }
    };
    addLikeDB();
  }, [data, like]);

  useEffect(() => {
    const addLikeDB = async () => {
      if (like && like === false) {
        let colRef = collection(db, "like");
        await updateDoc(colRef, {
          ...data,
          like,
        });
      }
    };
    addLikeDB();
  }, [data, like]);
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
            Review
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
            {data.length <= 0 && (
              <div className="mb-3 font-medium">Chưa có bình luận nào !!</div>
            )}
            <div className="review-customer__list">
              {data &&
                data.length > 0 &&
                data.map(
                  (item) =>
                    item.idProduct === id && (
                      <div className="review-customer__item" key={item.id}>
                        <div className="review-customer__people">
                          <div className="review-customer__image">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h3 className="review-customer__name">
                            {item.username}
                          </h3>
                        </div>
                        <div className="review-customer__date">
                          {new Date(
                            item?.createAt?.seconds * 1000
                          ).toLocaleString("vi-VI")}
                        </div>
                        <div className="review-customer__desc">
                          {parse(item.content || "")}
                        </div>
                        <div className="review-customer__star">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                        <div className="flex gap-2 items-center">
                          <span
                            onClick={() => handleClickLike()}
                            className="block my-3 cursor-pointer"
                          >
                            <AiTwotoneLike />
                          </span>
                          <span>{like !== 0 ? like : "Hữu ích?"}</span>
                        </div>
                      </div>
                    )
                )}
            </div>
            <WriteForm id={id} userInfo={userInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

const WriteForm = ({ id, userInfo, like }) => {
  const [content, setContent] = useState("");
  // useForm
  const { handleSubmit } = useForm({
    mode: "onChange",
  });
  const handleSubmitReview = async (values) => {
    const colRef = collection(db, "review");
    await addDoc(colRef, {
      idProduct: id,
      userId: userInfo.uid,
      username: userInfo?.displayName,
      content,
      createAt: serverTimestamp(),
    });
  };
  return (
    <div className="write">
      <h3 className="review__heading">Write A review</h3>
      {userInfo?.displayName ? (
        <form
          className="write-form"
          onSubmit={handleSubmit(handleSubmitReview)}
        >
          <div className="write-form--group w-full">
            <ReactQuill
              className="w-full"
              theme="snow"
              name="content"
              value={content}
              onChange={setContent}
            />
          </div>
          <button type="submit" className="button button--secondary">
            Submit review
          </button>
        </form>
      ) : (
        <div>
          <Button to="/sign-in" className="button bg-orange-500 w-[250px]">
            Mời bạn đăng nhập!!
          </Button>
        </div>
      )}
    </div>
  );
};

export default Review;
