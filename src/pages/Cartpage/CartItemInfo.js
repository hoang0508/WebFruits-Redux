import Count from "components/Count/Count";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "redux/cart/cartSlice";
import { setCount } from "redux/count/countSlice";

const CartItemInfo = ({ cart }) => {
  let countCart = useSelector((state) => state.count.count);
  // countCart = cart.count;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCartData({
        type: "all",
      })
    );
    dispatch(setCount(0));
  }, [dispatch]);
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
        <Count countCart={cart.count} />
      </div>
    </div>
  );
};

export default CartItemInfo;
