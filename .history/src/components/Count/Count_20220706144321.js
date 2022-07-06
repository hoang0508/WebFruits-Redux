import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCountDecrement, setCountIncrement } from "redux/count/countSlice";
import "./Count.scss";
const Count = ({ countCart }) => {
  // const dispatch = useDispatch();
  // const { count } = useSelector((state) => state.count);
  const [value, setValue] = useState(countCart);
  console.log("🚀 ~ file: Count.js ~ line 10 ~ Count ~ value", value);

  const handleClickDecrement = () => {
    // if (count > 0) {
    //   dispatch(setCountDecrement());
    // }
    setValue((state) => state - 1);
  };

  const handleClickIncrement = () => {
    // dispatch(setCountIncrement());
    setValue((state) => state + 1);
  };
  return (
    <div className="count">
      <div className="count-minus" onClick={() => handleClickDecrement()}>
        <FaMinus />
      </div>
      <input
        type="text"
        className="count-value"
        value={value || 1}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="count-plus" onClick={() => handleClickIncrement()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
