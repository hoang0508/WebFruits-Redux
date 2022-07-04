import { call, put } from "redux-saga/effects";
import { setData, setDataDetails } from "./productSlice";
import { requestProduct, requestProductId } from "./requests";

export default function* handleProduct({ type, payload }) {
  let reponseId;
  if (payload) {
    reponseId = yield call(requestProductId, payload);
    yield put(setDataDetails(reponseId));
  } else {
    const response = yield call(requestProduct);
    yield put(setData(response));
  }
}