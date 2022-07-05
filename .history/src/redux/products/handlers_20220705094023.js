import { call, put } from "redux-saga/effects";
import { setData, setDataDetails } from "./productSlice";
import { requestProduct, requestProductId } from "./requests";

export default function* handleProduct({ type, payload = "" }) {
  // if (payload) {
  const reponseId = yield call(requestProductId, payload);
  yield put(setDataDetails(reponseId));
  // } else {
  const response = yield call(requestProduct, payload);
  yield put(setData(response));
  // }
}
