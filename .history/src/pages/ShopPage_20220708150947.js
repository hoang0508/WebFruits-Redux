import ShopFilter from "modules/shops/ShopFilter";
import ShopProduct from "modules/shops/ShopProduct";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "redux/products/productSlice";

const ShopPage = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex">
          <ShopProduct />
          <ShopFilter />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
