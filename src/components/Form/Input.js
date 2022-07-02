import React from "react";
import { useController } from "react-hook-form";
// Tạo component MyInput tái sử dụng
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return <input className="form-input" {...field} {...props} />;
};

export default MyInput;
