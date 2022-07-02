import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/UseClickOutSide";

const Dropdown = ({
  data,
  control,
  name,
  setValue,
  dropdownLabel,
  ...props
}) => {
  // userClickoutside == customhooks
  const { show, setShow, nodeRef } = useClickOutSide();

  // useWatch
  const dropdownValue = useWatch({
    control,
    name: "Job",
    defaultValue: "",
  });
  console.log(dropdownValue);
  // useState label
  const [label, setLabel] = useState(dropdownLabel);
  //
  const handleClickValue = (e) => {
    // dataset value
    setValue(name, e.target.dataset.value);
    console.log(e.target.dataset.value);
    // // label
    setLabel(e.target.textContent);
    // Show
    setShow(false);
  };
  return (
    <div className="form-dropdown" ref={nodeRef}>
      <div className="form-dropdown-select" onClick={(e) => setShow(!show)}>
        {label}
      </div>
      <div className={`form-dropdown-option ${show ? "" : "opacity"}`}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div
              className="form-dropdown-value"
              key={item.id}
              data-value={item.value}
              onClick={(e) => handleClickValue(e)}
            >
              {item.text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
