import { call, put } from "redux-saga/effects";
import { setCartData } from "./cartSlice";
import { requestsCart } from "./requests";

export default function* handlerCart() {
  try {
    const data = yield call(requestsCart);
    yield put(setCartData(data));
  } catch (error) {
    console.log(error);
  }
}
