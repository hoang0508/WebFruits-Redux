import { takeLatest } from "redux-saga/effects";
// import handlerUser from "./handlers";
import { put, call } from "redux-saga/effects";
import requestUser from "./requests";
import { getUser } from "./userSlice";
export default function* userSaga() {
  yield console.log("abc");

  yield takeLatest(getUser.type, handlerUser);
}

function* handlerUser(action) {
  yield console.log("abc");
  // const userH = yield call(requestUser);
  // yield put(setUserInfo(userH));
}
