import { call, put } from "redux-saga/effects";
import { setData, setDataDetails } from "./productSlice";
import {
  requestProduct,
  requestProductFilter,
  requestProductId,
  requestProductLimit,
} from "./requests";

export default function* handleProduct({
  type,
  payload = {
    type: "id",
    value: "",
  },
}) {
  switch (payload.type) {
    case "id":
      const reponseId = yield call(requestProductId, payload.value);
      yield put(setDataDetails(reponseId));
      break;
    case "search":
      const responseSearch = yield call(requestProduct, payload.value);
      yield put(setData(responseSearch));
      break;
    case "all":
      const response = yield call(requestProduct);
      yield put(setData(response));
      break;
    case "limit":
      const responseLimit = yield call(requestProductLimit);
      yield put(setData(responseLimit));
      break;
    default:
      break;
  }
}
