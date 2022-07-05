import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "./Count.scss";
const Count = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);

  return (
    <div className="count">
      <div className="count-minus">
        <FaMinus />
      </div>
      <input type="text" className="count-value" value={count} />
      <div className="count-plus">
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
