import { put, call } from "redux-saga/effects";
import { requestsUserSignOut, requestUser } from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser({ type, payload }) {
  console.log("abc");
  try {
    if (payload) {
      yield call(requestsUserSignOut);
    } else {
      const userH = yield call(requestUser);
      yield put(setUserInfo(userH));
    }
  } catch (error) {
    console.log(error);
  }
}
