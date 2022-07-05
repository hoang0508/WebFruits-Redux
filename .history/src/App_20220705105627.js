import RoutersConfig from "configs/RoutersConfig";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "redux/products/productSlice";

function App() {
  return (
    <>
      <RoutersConfig />
    </>
  );
}

export default App;
