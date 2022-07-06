import Count from "components/Count/Count";
import { IconDelete, IconUpdate } from "components/icon";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
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
  const { count } = useSelector((state) => state.count);
  const [value, setValue] = useState();
  console.log("🚀 ~ file: CartPage.js ~ line 19 ~ CartPage ~ value", value);
  const handleUpdateCart = async (id) => {
    const price = data
      .filter((item) => item.id === id)
      .map((item) => item.priceNew)
      .join(" ");
    const colRef = doc(db, "cart", id);
    if (id) {
      await updateDoc(colRef, {
        count,
        totalPrice: Number(count) * Number(price),
      });
    }
    setValue(Number(count) * Number(price));
  };
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
                  <div className="flex gap-x-3 items-center">
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
                        ${value ? value : cart.priceNew}
                      </span>
                      <Count countCart={cart.count} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl">
                      Total: ${cart.totalPrice}.00
                    </div>
                    <div className="flex items-center mt-2 gap-x-3">
                      <IconUpdate
                        onClick={() => handleUpdateCart(cart.id)}
                        className="border p-2 border-gray-200 rounded cursor-pointer text-gray-500"
                      />
                      <IconDelete className="border p-2 border-gray-200 rounded cursor-pointer text-gray-500" />
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
