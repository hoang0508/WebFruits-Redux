import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ShopFilterPrice from "./ShopFilterPrice";
import ShopFilterProduct from "./ShopFilterProduct";
import ShopFilterSort from "./ShopFilterSort";

const ShopFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-lg w-[30%] p-4">
      <ShopFilterProduct />
      <ShopFilterPrice />
      <ShopFilterSort />
    </div>
  );
};

export default ShopFilter;
