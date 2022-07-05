import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCountDecrement } from "redux/count/countSlice";
import "./Count.scss";
const Count = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  const handleClickDecrement = () => {
    dispatch(setCountDecrement());
  };
  return (
    <div className="count">
      <div className="count-minus" onClick={() => handleClickDecrement()}>
        <FaMinus />
      </div>
      <input type="text" className="count-value" value={count} />
      <div className="count-plus" onClick={() => handleClickIncrement()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
