import { call, put } from "redux-saga/effects";
import { requestUser } from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser() {
  try {
    const userH = yield call(requestUser);
    console.log(
      "🚀 ~ file: handlers.js ~ line 8 ~ function*handlerUser ~ userH",
      userH
    );
    yield put(setUserInfo(userH));
  } catch (error) {
    console.log(error);
  }
}
