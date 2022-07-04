import RoutersConfig from "configs/RoutersConfig";
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
  return (
    <>
      <RoutersConfig />
    </>
  );
}

export default App;
