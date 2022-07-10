import React from "react";
import ShopFilterPrice from "./ShopFilterPrice";
import ShopFilterProduct from "./ShopFilterProduct";
import ShopFilterSort from "./ShopFilterSort";

const ShopFilter = () => {
  return (
    <div className="bg-white shadow-lg w-[30%] p-4">
      <ShopFilterProduct />
      <ShopFilterPrice />
      <ShopFilterSort />
    </div>
  );
};

export default ShopFilter;
