import { call, put } from "redux-saga/effects";
import { requestUser } from "./requests";
import { setUserInfo } from "./userSlice";

export default function* handlerUser() {
  console.log("kkk");
  try {
    const userH = yield call(requestUser);
    yield put(setUserInfo(userH));
  } catch (error) {
    console.log(error);
  }
}
