import Count from "components/Count/Count";
import React from "react";
import { useSelector } from "react-redux";

let counCart;
const CartItemInfo = ({ cart }) => {
  counCart = useSelector((state) => state.count.count);
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
        <Count countCart={counCart} />
      </div>
    </div>
  );
};

export default CartItemInfo;
