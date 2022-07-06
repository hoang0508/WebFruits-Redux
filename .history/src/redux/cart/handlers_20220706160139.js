import { call, put } from "redux-saga/effects";
import { setCartData, setCartDataFilter, setCartDataId } from "./cartSlice";
import { requestsCart, requestsCartId, requestsDelete } from "./requests";

export default function* handlerCart({ type, payload = null }) {
  try {
    if (payload) {
      const dataFilter = yield call(requestsDelete, payload);
      yield put(setCartDataFilter(dataFilter));
    }
    const data = yield call(requestsCart);
    yield put(setCartData(data));
  } catch (error) {
    console.log(error);
  }
}
