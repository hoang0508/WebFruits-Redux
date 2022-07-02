import Banner from "components/Banner/Banner";
import BannerCrops from "components/Banner/BannerCrops";
import BannerFruits from "components/Banner/BannerFruits";
import Discount from "components/layout/Discount/Discount";
import Feedback from "components/layout/Feedback/Feedback";
import LastestBlog from "components/layout/LastesBlog/LastestBlog";
import Provide from "components/layout/Provide/Provide";
import Subscribe from "components/layout/Subscribe/Subscribe";
import Product from "components/Product/Product";
import ProductsOrg from "components/Product/ProductsOrg";
import React from "react";

const HomePage = () => {
  return (
    <>
      <main>
        <Banner />
        <Product heading="Trending Products" />
        <BannerFruits />
        {/* <Product heading="Organic Shop Of Department" swp="swp"></Product> */}
        <ProductsOrg heading="Organic Shop Of Department"></ProductsOrg>
        <BannerCrops heading="We Are Ensure Of These Types">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </BannerCrops>
        <Product heading="Featured Products" apiF="apiF" />
        <Feedback heading="Client’s Feedback"></Feedback>
        <Product heading="Best Sellers Products" swp="swp"></Product>
        <Discount></Discount>
        <div className="bgr-product">
          <Product
            heading="Most Viewed Products This Month"
            swp="swp"
          ></Product>
        </div>
        <LastestBlog dataHome heading="Latest Blog"></LastestBlog>
        <Subscribe heading="Subscribe To Our Newsletter"></Subscribe>
        <Provide />
      </main>
    </>
  );
};

export default HomePage;
