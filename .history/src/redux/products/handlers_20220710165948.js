import { call, put } from "redux-saga/effects";
import {
  setData,
  setDataDetails,
  setDataFilter,
  setDataFilterPrice,
  setDataSortName,
  setDataSortPrice,
  setDataStatus,
  setLoading,
} from "./productSlice";
import {
  requestProduct,
  requestProductDelete,
  requestProductId,
  requestProductLimit,
  requestProductPrice,
  requestProductQuery,
} from "./requests";

export default function* handleProduct({
  type,
  payload = {
    type: "id",
    value: "",
  },
}) {
  yield put(setLoading(true));
  switch (payload.type) {
    case "id":
      const reponseId = yield call(requestProductId, payload.value);
      yield put(setDataDetails(reponseId));
      break;
    case "search":
      const responseSearch = yield call(requestProduct, payload.value);
      yield put(setData(responseSearch));
      yield put(setLoading(false));
      break;
    case "all":
      const response = yield call(requestProduct);
      yield put(setData(response));
      yield put(setLoading(false));
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
      yield put(setLoading(false));
      break;
    case "filterPrice":
      const responsePrice = yield call(requestProductPrice, payload.value);
      yield put(setDataFilterPrice(responsePrice));
      break;
    case "sortPrice":
      const reponseSort = payload.value;
      yield put(setDataSortPrice(reponseSort));
      yield put(setLoading(false));
      break;
    case "sortName":
      const reponseName = payload.value;
      yield put(setDataSortName(reponseName));
      yield put(setLoading(false));
      break;
    default:
      break;
  }
}
