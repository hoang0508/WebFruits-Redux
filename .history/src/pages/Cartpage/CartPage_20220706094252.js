import Count from "components/Count/Count";
import { IconDelete, IconUpdate } from "components/icon";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "redux/cart/cartSlice";
import bannerCart from "../../assets/img/page-banner-3.jpg";
import "./CartPage.scss";
const CartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  const data = useSelector((state) => state.carts.cartData);
  console.log("🚀 ~ file: CartPage.js ~ line 9 ~ CartPage ~ data", data);
  return (
    <div className="cart">
      <div
        className="details-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="details-heading  heading-page">Cart page</h3>
      </div>
      <div className="cart-main">
        <div className="container">
          <div className="cart-main--left">
            {data &&
              data.length > 0 &&
              data.map((cart) => (
                <div
                  className=" flex justify-between items-center"
                  key={cart.id}
                >
                  <div className="flex gap-x-3 items-center mb-5">
                    <div>
                      <img
                        src={cart.image}
                        alt=""
                        className="w-[120px] h-[120px] object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {cart.name}
                      </h3>
                      <span className="text-gray-300 text-base mb-2 inline-block">
                        $14.00
                      </span>
                      <Count />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl">Total: $40.00</div>
                    <div className="flex items-center mt-2">
                      <IconUpdate />
                      <IconDelete />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-main--right"></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
