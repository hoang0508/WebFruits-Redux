import { put, call } from "redux-saga/effects";
import requestUser from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser(action) {
  console.log(
    "🚀 ~ file: handlers.js ~ line 6 ~ function*handlerUser ~ action",
    action
  );
  console.log("abc");
  try {
    const userH = yield call(requestUser);
    yield put(setUserInfo(userH));
  } catch (error) {
    console.log(error);
  }
}
