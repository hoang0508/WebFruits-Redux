import { call, put } from "redux-saga/effects";
import { setData, setDataDetails } from "./productSlice";
import { requestProduct, requestProductId } from "./requests";

export default function* handleProduct({
  type,
  payload = {
    type: "id",
    value: "",
  },
}) {
  if (payload.type) {
    const reponseId = yield call(requestProductId, payload.value);
    yield put(setDataDetails(reponseId));
  } else {
    const response = yield call(requestProduct, payload.value);
    yield put(setData(response));
  }
}
