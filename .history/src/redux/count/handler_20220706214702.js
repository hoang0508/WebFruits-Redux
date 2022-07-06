import { put } from "redux-saga/effects";
import { setCount, setCountDecrement, setCountIncrement } from "./countSlice";

export default function* handlerCount({ type, payload }) {
  yield put(setCountDecrement(payload));
  yield put(setCountIncrement(payload));
}
