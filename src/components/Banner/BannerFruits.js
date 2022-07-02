import React from "react";
import bannerFruitsBgr from "../../assets/img/detox-water-bg.jpg";
import bannerFruitsImg from "../../assets/img/detox-water-main.png";
import shape1 from "../../assets/img/detox-water-1.png";
import shape2 from "../../assets/img/detox-water-2.png";
import shape3 from "../../assets/img/detox-water-3.png";
import shape4 from "../../assets/img/detox-water-4.png";
import PageLine from "../PageLine";
const BannerFruits = () => {
  return (
    <section
      className="banner-fruits banner-fixed"
      style={{ backgroundImage: `url(${bannerFruitsBgr})` }}
    >
      <PageLine heading="Collect Detox Water From Organic Shop">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
      <div className="banner-fruits--images">
        <img src={bannerFruitsImg} alt="" />
      </div>
      <div className="banner-fruits--shape">
        <div className="shape1">
          <img src={shape1} alt="" />
        </div>
        <div className="shape2">
          <img src={shape2} alt="" />
        </div>
        <div className="shape3">
          <img src={shape3} alt="" />
        </div>
        <div className="shape4">
          <img src={shape4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BannerFruits;
