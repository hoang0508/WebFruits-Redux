import { call, put } from "redux-saga/effects";
import {
  setData,
  setDataDetails,
  setDataFilter,
  setDataStatus,
  setLoading,
} from "./productSlice";
import {
  requestProduct,
  requestProductDelete,
  requestProductFilter,
  requestProductId,
  requestProductLimit,
  requestProductQuery,
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
      yield put(setLoading(true));
      break;
    case "all":
      const response = yield call(requestProduct);
      yield put(setData(response));
      yield put(setLoading(true));
      break;
    case "limit":
      const responseLimit = yield call(requestProductLimit);
      yield put(setData(responseLimit));
      break;
    case "delete":
      const responseDelete = yield call(requestProductDelete, payload.value);
      yield put(setDataFilter(responseDelete));
      break;
    case "query":
      const responseQuery = yield call(requestProductQuery, payload.value);
      yield put(setDataStatus(responseQuery));
      yield put(setLoading(true));
      break;
    default:
      break;
  }
}
