import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ children, checked, name, control, onChange, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <label>
      <input
        onChange={onChange}
        type="radio"
        name={name}
        checked={checked}
        {...field}
        {...props}
        className="hidden-input"
      />
      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div
          className={`w-7 h-7 rounded-full ${
            checked ? "bg-green-400" : "bg-gray-200"
          }`}
        ></div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
