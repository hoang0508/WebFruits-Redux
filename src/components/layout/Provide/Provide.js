import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Provide.scss";
const dataProvide = [
  {
    id: 1,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-1.png",
  },
  {
    id: 2,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-2.png",
  },
  {
    id: 3,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-3.png",
  },
  {
    id: 4,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-4.png",
  },
  {
    id: 5,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-5.png",
  },
];

const Provide = () => {
  return (
    <section className="provide">
      <div className="container">
        <div className="provide-list product-list--swiper ">
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
            {dataProvide &&
              dataProvide.length > 0 &&
              dataProvide.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="provide-images">
                    <img src={item.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Provide;
