import React from "react";
import bannerFeedback from "../../../assets/img/testimonial-bg.jpg";
import PageLine from "../../PageLine";
import client1 from "../../../assets/img/client-1.jpg";
import client2 from "../../../assets/img/client-2.jpg";
import client3 from "../../../assets/img/client-3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Feedback.scss";

const dataFeetback = [
  {
    id: 1,
    image: `${client1}`,
    name: "Ken Morris",
    job: "Organic Farmer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
  },
  {
    id: 2,
    image: `${client2}`,
    name: "Lodi Kheda",
    job: "Organic Farmer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
  },
  {
    id: 3,
    image: `${client3}`,
    name: "Johansen Lisa",
    job: "Organic Farmer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
  },
];

const Feedback = ({ heading }) => {
  return (
    <section
      className="banner-fixed banner-feedback"
      style={{ backgroundImage: `url(${bannerFeedback})` }}
    >
      <div className="overlay"></div>
      <div className="banner-feedback--heading">
        <PageLine heading={heading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </PageLine>
        <div className="banner-feedback--list">
          <Swiper
            grabCursor={"true"}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {dataFeetback &&
              dataFeetback.length > 0 &&
              dataFeetback.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="banner-feedback--item">
                    <div className="banner-feedback--images">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="banner-feedback--content">
                      <h3 className="banner-feedback--name">{item.name}</h3>
                      <div className="banner-feedback--job">{item.job}</div>
                      <div className="banner-feedback--desc">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
