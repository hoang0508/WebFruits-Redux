import RoutersConfig from "configs/RoutersConfig";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import requestUser from "redux/users/requests";
import { getUser, setUserInfo } from "redux/users/userSlice";
import { call, put } from "redux-saga/effects";

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  useEffect(() => {
    console.log(getUser.type);
    dispatch({ type: "123" });
  }, []);

  return (
    <>
      <RoutersConfig />
    </>
  );
}

export default App;
