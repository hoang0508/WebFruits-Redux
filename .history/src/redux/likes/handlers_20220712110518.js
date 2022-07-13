import { call, put } from "redux-saga/effects";
import { setLikeData } from "./likeSlice";
import { requestLike } from "./requests";

export function* handlerLike({ type, payload }) {
  const reponseLike = yield call(requestLike);
  yield put(setLikeData(reponseLike));
}
