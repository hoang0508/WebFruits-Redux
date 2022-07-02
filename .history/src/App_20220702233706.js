import RoutersConfig from "configs/RoutersConfig";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ userInfo", userInfo);

  useEffect(() => {
    dispatch("USER");
  }, [dispatch]);
  return (
    <>
      <RoutersConfig />
    </>
  );
}

export default App;
