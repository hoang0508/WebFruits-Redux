import Count from "components/Count/Count";
import React from "react";
import { useSelector } from "react-redux";

const CartItemInfo = ({ cart }) => {
  let countCart = useSelector((state) => state.count.count);
  countCart = cart.count;
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
        <Count countCart={countCart} />
      </div>
    </div>
  );
};

export default CartItemInfo;
