import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import "./Product.scss";
import PageLine from "../PageLine";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "redux/products/productSlice";

const Product = ({ heading, swp, apiF, t }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const { data } = useSelector((state) => state.products);
  // Slice
  let start = 8;
  let end = 16;
  let numberStartSlice = apiF || t ? `${start}` : 0;
  let numberEndSlice = apiF || t ? `${end}` : 8;
  return (
    <>
      <section className="product">
        <div className="container">
          <PageLine heading={heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse
          </PageLine>
          {swp ? (
            <div className="product-list--swiper">
              <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {data &&
                  data.length > 0 &&
                  data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProductItem item={item}></ProductItem>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ) : (
            <div className="product-list">
              {data &&
                data.length > 0 &&
                data
                  .slice(numberStartSlice, numberEndSlice)
                  .map((item) => (
                    <ProductItem key={item.id} item={item}></ProductItem>
                  ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
