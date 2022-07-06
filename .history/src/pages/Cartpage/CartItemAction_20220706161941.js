import { IconDelete, IconUpdate } from "components/icon";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "redux/cart/cartSlice";

const CartItemAction = React.memo(({ cart }) => {
  const { count } = useSelector((state) => state.count);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  //
  const handleUpdateCart = async (cart) => {
    const colRef = doc(db, "cart", cart.id);
    if (cart?.id) {
      await updateDoc(colRef, {
        count,
        totalPrice: Number(count) * Number(cart.priceNew),
      });
    }
    setValue(Number(count) * Number(cart.priceNew));

    dispatch(
      getCartData({
        type: "update",
        value: cart.id,
      })
    );
  };

  // Delete
  const handleDeleteCart = (id) => {
    // dispatch(
    //   getCartData({
    //     type: "delete",
    //     value: id,
    //   })
    // );
  };
  return (
    <div>
      <div className="font-bold text-xl">
        Total: ${value ? value : cart?.totalPrice}.00
      </div>
      <div className="flex items-center mt-2 gap-x-3">
        <IconUpdate
          onClick={() => handleUpdateCart(cart)}
          className="border p-2 border-gray-200 rounded cursor-pointer text-gray-500"
        />
        <IconDelete
          onClick={() => handleDeleteCart(cart.id)}
          className="border p-2 border-gray-200 rounded cursor-pointer text-gray-500"
        />
      </div>
    </div>
  );
});

export default CartItemAction;
