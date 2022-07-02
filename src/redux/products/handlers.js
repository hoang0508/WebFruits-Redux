import { call, put } from "redux-saga/effects";
import { setData } from "./productSlice";
import { requestProduct } from "./requests";

export default function* handleProduct() {
  const response = yield call(requestProduct);
  yield put(setData(response));
}
