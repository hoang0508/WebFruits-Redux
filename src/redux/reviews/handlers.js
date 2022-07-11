import { call, put } from "redux-saga/effects";
import { requestReview } from "./requests";
import { setDataReview } from "./reviewSlice";

export default function* handleReview({ type, payload }) {
  const reponse = yield call(requestReview);
  yield put(setDataReview(reponse));
}
