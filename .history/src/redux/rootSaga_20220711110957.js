import { fork, all } from "redux-saga/effects";
import cartSaga from "./cart/saga";
import countSaga from "./count/saga";
import productSaga from "./products/saga";
import reviewSaga from "./reviews/saga";
import userSaga from "./users/saga";

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(productSaga),
    fork(cartSaga),
    fork(countSaga),
    fork(reviewSaga),
  ]);
}
