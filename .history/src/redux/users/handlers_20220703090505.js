import { call, put } from "redux-saga/effects";
import { requestUser } from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser() {
  const userH = yield call(requestUser);
  yield put(setUserInfo(userH));
}
