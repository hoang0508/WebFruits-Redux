import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "redux/cart/cartSlice";
import bannerCart from "../../assets/img/page-banner-3.jpg";
import CartItemAction from "./CartItemAction";
import CartItemInfo from "./CartItemInfo";
import "./CartPage.scss";
const CartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCartData({
        type: "all",
      })
    );
  }, [dispatch]);
  const data = useSelector((state) => state.carts.cartData);

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
                  className="flex justify-between items-center border-b border-gray-200 py-3 mb-5"
                  key={cart.id}
                >
                  <CartItemInfo cart={cart} />
                  <CartItemAction cart={cart} />
                </div>
              ))}
          </div>
          <div className="cart-main--right p-3">
            <div className="flex justify-between items-center">
              <h3 className="">Total price:</h3>
              <div>$500.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
