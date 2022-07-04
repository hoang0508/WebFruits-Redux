import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ children, checked, name, control, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <label>
      <input
        name={name}
        checked={checked}
        {...field}
        className="hidden-input"
      />
      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div></div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
