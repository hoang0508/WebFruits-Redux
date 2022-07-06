import { put } from "redux-saga/effects";
import { setCount } from "./countSlice";

export default function* handlerCount({ type, payload }) {
  yield put(setCount(payload));
}
