import RoutersConfig from "configs/RoutersConfig";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/users/userSlice";

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ userInfo", userInfo);

  useEffect(() => {
    dispatch({ type: "demo" });
  }, [dispatch]);

  //
  useEffect(() => {
    const reponse = onAuthStateChanged(auth, (user) => {
      // console.log(user);
    });
    console.log(reponse);
  }, []);
  return (
    <>
      <RoutersConfig />
    </>
  );
}

export default App;
