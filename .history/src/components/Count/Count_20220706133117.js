import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCountDecrement, setCountIncrement } from "redux/count/countSlice";
import "./Count.scss";
const Count = ({ countCart }) => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  const [value, setValue] = useState(countCart);

  const handleClickDecrement = () => {
    if (count > 0) {
      dispatch(setCountDecrement());
    }
  };

  const handleClickIncrement = () => {
    dispatch(setCountIncrement());
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
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="count-plus" onClick={() => handleClickIncrement()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
