import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountDecrement,
  setCountIncrement,
  setValueDecrement,
  setValueIncrement,
} from "redux/count/countSlice";
import "./Count.scss";
const Count = ({ countCart }) => {
  const dispatch = useDispatch();
  let { count } = useSelector((state) => state.count);
  // const [value, setValue] = useState((count = countCart));
  // console.log("🚀 ~ file: Count.js ~ line 15 ~ Count ~ value", value);

  const handleClickDecrement = () => {
    if (count > 0) {
      dispatch(setCountDecrement());
    }
  };

  const handleClickIncrement = () => {
    dispatch(setCountIncrement());
  };

  const handleChangeCount = (e) => {
    // setValue(e.target.value);
  };
  return (
    <div className="count">
      <div className="count-minus" onClick={() => handleClickDecrement()}>
        <FaMinus />
      </div>
      <input
        type="text"
        className="count-value"
        value={count}
        onChange={(e) => handleChangeCount(e)}
      />
      <div className="count-plus" onClick={() => handleClickIncrement()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
