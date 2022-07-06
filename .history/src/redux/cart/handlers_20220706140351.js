import { call, put } from "redux-saga/effects";
import { setCartData, setCartDataId } from "./cartSlice";
import { requestsCart, requestsCartId } from "./requests";

export default function* handlerCart({ type, payload = null }) {
  try {
    if (payload) {
      const dataId = yield call(requestsCartId, payload);
      yield put(setCartDataId(dataId));
    }
    const data = yield call(requestsCart);
    yield put(setCartData(data));
  } catch (error) {
    console.log(error);
  }
}
