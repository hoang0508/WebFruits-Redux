import { takeLatest } from "redux-saga/effects";
import handleReview from "./handlers";
import { getDataReview } from "./reviewSlice";

export default function* reviewSaga() {
  yield takeLatest(getDataReview.type, handleReview);
}
