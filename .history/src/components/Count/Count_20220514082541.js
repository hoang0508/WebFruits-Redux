import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAuthContext } from "../context/Auth-Context.js";
import "./Count.scss";
const Count = ({ count1 }) => {
  const [value, setValue] = useState("");
  const { handleCountMinus, handleCountPlus, count } = useAuthContext();
  return (
    <div className="count">
      <div className="count-minus" onClick={() => handleCountMinus()}>
        <FaMinus />
      </div>
      <input
        type="text"
        value={count1 > 1 ? count1 : count}
        className="count-value"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="count-plus" onClick={() => handleCountPlus()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
