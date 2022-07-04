import RoutersConfig from "configs/RoutersConfig";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import requestUser from "redux/users/requests";
import { getUser } from "redux/users/userSlice";

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ userInfo", userInfo);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // //
  useEffect(() => {
    async function fetchData() {
      const h = await requestUser();
      console.log("🚀 ~ file: App.js ~ line 21 ~ useEffect ~ h", h);
    }
    fetchData();
  }, []);
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