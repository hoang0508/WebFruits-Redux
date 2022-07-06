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
  const { count } = useSelector((state) => state.count);
  console.log("🚀 ~ file: Count.js ~ line 14 ~ Count ~ count", count);
  const [value, setValue] = useState(countCart);

  useEffect(() => {}, []);
  const handleClickDecrement = () => {
    if (count > 0) {
      dispatch(setCountDecrement(Number(value)));
    }
    console.log("hhh");
  };

  const handleClickIncrement = () => {
    dispatch(setCountIncrement(Number(value)));
    console.log("kkk");
  };

  const handleChangeCount = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="count">
      <div className="count-minus" onClick={() => handleClickDecrement()}>
        <FaMinus />
      </div>
      <input
        type="text"
        className="count-value"
        value={value ? value : count}
        onChange={(e) => handleChangeCount(e)}
      />
      <div className="count-plus" onClick={() => handleClickIncrement()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
