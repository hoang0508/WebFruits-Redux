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
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ userInfo", userInfo);

  useEffect(() => {
    dispatch(getUser("kk"));
  }, [dispatch]);

  // //
  // const handlTest = async () => {
  //   const reponse = await new Promise((resolve, reject) => {
  //     onAuthStateChanged(auth, (user) => {
  //       resolve(user);
  //     });
  //   });
  //   console.log(reponse);
  //   return reponse;
  // };
  // handlTest();
  return (
    <>
      <RoutersConfig />
    </>
  );
}

export default App;
