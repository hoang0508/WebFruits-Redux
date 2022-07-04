import { call, put } from "redux-saga/effects";
import { setData, setDataDetails } from "./productSlice";
import { requestProduct, requestProductId } from "./requests";

export default function* handleProduct({ type, payload }) {
  console.log(
    "🚀 ~ file: handlers.js ~ line 6 ~ function*handleProduct ~ payload",
    payload
  );
  let reponseId;
  if (payload) {
    reponseId = yield call(requestProductId, payload);
  } else {
    const response = yield call(requestProduct);
  }

  yield put(setData(response));
  yield put(setDataDetails(reponseId));
}
