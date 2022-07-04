import { call, put } from "redux-saga/effects";
import { requestUser } from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser(action) {
  console.log(
    "🚀 ~ file: handlers.js ~ line 6 ~ function*handlerUser ~ action",
    action
  );
  try {
    const userH = yield call(requestUser);
    console.log(
      "🚀 ~ file: handlers.js ~ line 9 ~ function*handlerUser ~ userH",
      userH
    );
    yield put(setUserInfo(userH));
  } catch (error) {
    console.log(error);
  }
}
