import { fork, all } from "redux-saga/effects";
import cartSaga from "./cart/saga";
import productSaga from "./products/saga";
import userSaga from "./users/saga";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(productSaga), fork(cartSaga)]);
}
