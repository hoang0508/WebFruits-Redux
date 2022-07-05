import RoutersConfig from "configs/RoutersConfig";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
