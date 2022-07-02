import React from "react";
import "./Checkbox.scss";
const Checkbox = ({ children }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name=""
        id="checkbox_input"
        className="checkbox_input"
      />
      <label htmlFor="checkbox_input" className="checkbox_label">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
