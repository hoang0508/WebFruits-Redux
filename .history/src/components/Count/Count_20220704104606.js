import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Count.scss";
const Count = () => {
  return (
    <div className="count">
      <div className="count-minus">
        <FaMinus />
      </div>
      <input type="text" className="count-value" />
      <div className="count-plus">
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
