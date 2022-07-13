import { Button } from "components/button";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "redux/cart/cartSlice";
import { setCount } from "redux/count/countSlice";
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
    dispatch(setCount(1));
  }, [dispatch]);
  const data = useSelector((state) => state.carts.cartData);

  // total price
  const totalPrice = data
    .map((item) => item.totalPrice)
    .reduce((acc, cur) => acc + cur, 0);

  // add order
  const handleAddOrder = async (order) => {
    const orderRef = collection(db, "order");
    await addDoc(orderRef, {
      ...order,
      totalOrder: totalPrice,
    });
    //
    order.forEach(async (element) => {
      const colRef = doc(db, "cart", element.id);
      await deleteDoc(colRef);
    });
    dispatch(
      getCartData({
        type: "all",
      })
    );
  };
  const { count } = useSelector((state) => state.count);
  console.log("🚀 ~ file: CartPage.js ~ line 48 ~ CartPage ~ count", count);
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
            <div className="flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-xl">Total price:</h3>
                <div className="font-medium text-orange-400 text-lg">
                  ${totalPrice}.00
                </div>
              </div>
              <div className="mt-5">
                <Button
                  onClick={() => handleAddOrder(data)}
                  height="60px"
                  className="button button--primary"
                >
                  Thanh toán đơn hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
