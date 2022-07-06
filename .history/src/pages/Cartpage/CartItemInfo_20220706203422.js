import Count from "components/Count/Count";
import React from "react";
import { useSelector } from "react-redux";

const CartItemInfo = ({ cart }) => {
  let counCart = useSelector((state) => state.count.count);
  console.log(
    "🚀 ~ file: CartItemInfo.js ~ line 7 ~ CartItemInfo ~ counCart",
    counCart
  );
  const count = cart.count ? counCart === cart.count : 0;
  console.log(
    "🚀 ~ file: CartItemInfo.js ~ line 12 ~ CartItemInfo ~ count",
    count
  );
  return (
    <div className="flex gap-x-3 items-center">
      <div>
        <img
          src={cart.image}
          alt=""
          className="w-[120px] h-[120px] object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{cart.name}</h3>
        <span className="text-gray-300 text-base mb-2 inline-block">
          ${cart.priceNew}
        </span>
        <Count countCart={count} />
      </div>
    </div>
  );
};

export default CartItemInfo;
