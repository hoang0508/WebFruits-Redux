import React from "react";

const Checkbox = ({ name, children, ...props }) => {
  return (
    <label className="flex items-baseline gap-x-2">
      <input
        id={name}
        name={name}
        type="checkbox"
        className="w-5 h-5 rounded border-0 border-gray-200 cursor-pointer outline-none"
        {...props}
      />
      <div className="form-checkbox">
        <div className="">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7453 1.89733L3.93178 9.71087L0.254822 6.03391L1.17132 5.11741L3.93178 7.87137L10.8288 0.980835L11.7453 1.89733Z"
              fill="white"
            />
          </svg>
        </div>
        <label className="cursor-pointer" htmlFor={name}>
          {children}
        </label>
      </div>
    </label>
  );
};

export default Checkbox;
