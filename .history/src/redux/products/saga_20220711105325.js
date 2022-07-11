import handleProduct from "./handlers";
import { getData } from "./productSlice";
import { takeLatest } from "redux-saga/effects";

export default function* productSaga() {
  yield takeLatest(getData.type, handleProduct);
}
