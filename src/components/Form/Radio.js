import React from "react";
import { useController } from "react-hook-form";
import "./Form.scss";
const Radio = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <label className="custom-radio">
      <input type="radio" className="form-input-radio" {...field} {...props} />
      <div className="form-custom-input"></div>
    </label>
  );
};

export default Radio;
