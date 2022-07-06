import { put } from "redux-saga/effects";
import { setCount, setCountDecrement, setCountIncrement } from "./countSlice";

export default function* handlerCount({ type, payload }) {
  console.log(
    "🚀 ~ file: handler.js ~ line 5 ~ function*handlerCount ~ payload",
    payload
  );
  yield put(setCountDecrement(payload));
  yield put(setCountIncrement(payload));
}
