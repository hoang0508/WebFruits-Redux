import ShopFilter from "modules/shops/ShopFilter";
import ShopProduct from "modules/shops/ShopProduct";
import React from "react";

const ShopPage = () => {
  return (
    <>
      <div className="container">
        <div className="flex">
          <ShopProduct />
          <ShopFilter />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
