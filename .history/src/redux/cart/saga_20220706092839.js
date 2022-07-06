import { takeLatest } from "redux-saga/effects";
import { getCartData } from "./cartSlice";
import handlerCart from "./handlers";

export default function* cartSaga() {
  yield takeLatest(getCartData.type, handlerCart);
}
