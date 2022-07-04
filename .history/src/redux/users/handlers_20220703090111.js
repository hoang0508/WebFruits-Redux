import { call, put } from "redux-saga/effects";
import { requestUser } from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser() {
  const user = yield call(requestUser);
  console.log(
    "🚀 ~ file: handlers.js ~ line 7 ~ function*handlerUser ~ user",
    user
  );
  yield put(setUserInfo(user));
}
