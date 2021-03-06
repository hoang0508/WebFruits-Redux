import { takeLatest } from "redux-saga/effects";
import { setCount } from "./countSlice";
import handlerCount from "./handler";

export default function* countSaga() {
  yield takeLatest(setCount.type, handlerCount);
}
