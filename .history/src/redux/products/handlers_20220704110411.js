import { call, put } from "redux-saga/effects";
import { setData, setDataDetails } from "./productSlice";
import { requestProduct, requestProductId } from "./requests";

export default function* handleProduct({ type, payload }) {
  const response = yield call(requestProduct);
  const reponseId = yield call(requestProductId, payload);

  yield put(setData(response));
  yield put(setDataDetails(reponseId));
}
