import { takeLatest } from "redux-saga/effects";
import handlerUser from "./handlers";
export default function* userSaga() {
  yield takeLatest("USER", handlerUser);
}
