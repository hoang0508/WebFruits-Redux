import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ShopFilterPrice from "./ShopFilterPrice";
import ShopFilterProduct from "./ShopFilterProduct";

const ShopFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-lg w-[30%] p-4">
      <ShopFilterProduct />
      <ShopFilterPrice />
    </div>
  );
};

export default ShopFilter;
