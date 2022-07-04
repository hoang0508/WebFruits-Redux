import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import productSaga from "./products/saga";
import handlerUser from "./users/handlers";
import userSaga from "./users/saga";
import { getUser } from "./users/userSlice";

export default function* rootSaga() {
  yield all([userSaga(), productSaga()]);
}

function* test() {
  yield takeEvery(getUser.type, handlerUser);
}