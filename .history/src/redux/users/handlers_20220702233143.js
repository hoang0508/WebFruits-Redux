import { call, put } from "redux-saga/effects";
import requestUser from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser() {
  const user = yield call(requestUser);
  yield put(setUserInfo(user));
}
