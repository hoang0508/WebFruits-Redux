import RoutersConfig from "configs/RoutersConfig";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import requestUser from "redux/users/requests";
import { getUser, setUserInfo } from "redux/users/userSlice";
import { call, put } from "redux-saga/effects";
import { getData } from "redux/products/productSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getData({
        type: "all",
      })
    );
  }, [dispatch]);
  return (
    <>
      <RoutersConfig />
    </>
  );
}

export default App;
