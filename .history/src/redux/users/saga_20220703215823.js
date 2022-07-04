import { takeLatest } from "redux-saga/effects";
import handlerUser from "./handlers";
import { getUser } from "./userSlice";
export default function* userSaga() {
  yield takeLatest(getUser.type, handlerUser);
}

function* handlerUser(action) {
  console.log("abc");
  try {
    const userH = yield call(requestUser);
    yield put(setUserInfo(userH));
  } catch (error) {
    console.log(error);
  }
}
