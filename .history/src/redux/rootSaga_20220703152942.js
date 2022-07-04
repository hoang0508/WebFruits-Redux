import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import productSaga from "./products/saga";
import handlerUser from "./users/handlers";
import userSaga from "./users/saga";

export default function* rootSaga() {
  yield all([fork(productSaga, userSaga, test)]);
}

function* test() {
  yield takeLatest("demo", handlerUser);
}
