import Checkbox from "components/Box/Checkbox";
import Count from "components/Count/Count";
import Social from "components/Media/Social";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Productdetails.scss";
import parse from "html-react-parser";
import { addDoc, collection } from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import { toast } from "react-toastify";
import { setCount } from "redux/count/countSlice";
import { getCartData } from "redux/cart/cartSlice";
import { useEffect } from "react";
import { v4 } from "uuid";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const Productdetails = React.memo(({ id }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.products.dataDetails);

  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleAddToCart = async (data) => {
    const colRef = collection(db, "cart");
    await addDoc(colRef, {
      ...data,
      count,
      totalPrice: count * data.priceNew,
    });
    dispatch(
      getCartData({
        type: "all",
      })
    );
    dispatch(setCount(1));
    navigate(`/cart`);
    toast.success("Add to cart successfully!!");
  };

  const { image, image1, image2, image3 } = data;
  const dataArrImg = [image, image1, image2, image3];
  console.log("🚀 ~ file: Productdetails.js ~ line 46 ~ Productdetails ~ dataArrImg", dataArrImg)

  const [currenImageThumb, setCurrentImageThumb] = useState(image);

    // index photo
    const [photoIndex, setPhotoIndex] = useState(0);
    // open
    const [isOpen, setIsOnpen] = useState(false);

  useEffect(() => {
    setCurrentImageThumb(image);
  }, [image]);
  // handle Image
  const hanđleChangeImage = (item, index) => {
    setCurrentImageThumb(item);
  };

  // review length
  const review = useSelector((state) => state.reviews.dataReview);
  // filter kiểm tra idProduct = id
  const reviewLength = review.filter((item) => item.idProduct === id).length;

  const handleClickCurrent = () => {
    const indexImg = dataArrImg.findIndex((item) => item === currenImageThumb);
    setPhotoIndex(indexImg);
    setIsOnpen(true);
  };

  return (
    <>
      <div className="productD--list">
        <div className="productD--left">
          <div className="productD--images">
            <img src={currenImageThumb} alt="" loading="lazy"   onClick={() => handleClickCurrent()} />
          </div>
          <div className="productD--thumb">
              {dataArrImg && dataArrImg.length > 0 && dataArrImg.map((item) => (
                <div className="productD--imgThumb" key={v4()} onClick={() => hanđleChangeImage(item)}>
                    <img src={item}  alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="productD--right">
          <div className="flex gap-x-2 items-center mb-3">
            <span className="text-base font-medium">Tên sản phẩm: </span>
            <h3 className="productD--title">{data.name}</h3>
          </div>
          <div className="flex gap-x-2 items-center  mb-3">
            <span className="text-base font-medium">Giá sản phẩm: </span>
            <div className="productD--price flex gap-x-3">
              <span className="productD--priceNew text-textColortx font-semibold">
                ${data.priceNew}
              </span>
              <span className="productD--priceOld text-primaryColor">
                ${data.priceOld}
              </span>
            </div>
          </div>
          <div className="productD--vote">
            <div className="productD--star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="productD--review">
              {reviewLength > 0
                ? `có ${reviewLength} review`
                : "(chưa có review nào!)"}
            </div>
          </div>
          <div className="productD--desc">{parse(data.content || "")}</div>
          <div className="productD--cart">
            <div>
              <Count countCart={1} />
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
      {isOpen && (
        <Lightbox
          mainSrc={dataArrImg[photoIndex]}
          nextSrc={dataArrImg[(photoIndex + 1) % dataArrImg.length]}
          prevSrc={
            dataArrImg[
              (photoIndex + dataArrImg.length - 1) % dataArrImg.length
            ]
          }
          onCloseRequest={() => setIsOnpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              () => (photoIndex + dataArrImg.length - 1) % dataArrImg.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              () => (photoIndex + dataArrImg.length + 1) % dataArrImg.length
            )
          }
        />
      )}
    </>
  );
});

export default Productdetails;
