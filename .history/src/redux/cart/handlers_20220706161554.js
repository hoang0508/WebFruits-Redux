import { call, put } from "redux-saga/effects";
import { setCartData, setCartDataFilter, setCartDataId } from "./cartSlice";
import { requestsCart, requestsCartId, requestsDelete } from "./requests";

export default function* handlerCart({
  type,
  payload = {
    type: "id",
    value: "",
  },
}) {
  switch (payload.type) {
    case "update":
      const dataId = yield call(requestsCartId, payload.value);
      yield put(setCartDataId(dataId));
      break;
    case "delete":
      const dataFilter = yield call(requestsDelete, payload.value);
      yield put(setCartDataFilter(dataFilter));
      break;
    case "all":
      const data = yield call(requestsCart);
      yield put(setCartData(data));

    default:
      break;
  }
}
