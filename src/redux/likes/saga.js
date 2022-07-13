import { takeLatest } from "redux-saga/effects";
import { handlerLike } from "./handlers";
import { getLikeData } from "./likeSlice";

export default function* likeSaga() {
  yield takeLatest(getLikeData.type, handlerLike);
}
