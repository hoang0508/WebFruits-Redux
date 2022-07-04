import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
