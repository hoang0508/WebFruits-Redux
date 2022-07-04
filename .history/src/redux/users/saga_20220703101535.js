import { takeLatest } from "redux-saga/effects";
import handlerUser from "./handlers";
import { getUser } from "./userSlice";
export default function* userSaga() {
  yield takeLatest(getUser.type, handlerUser);
  console.log("kkk");
}
