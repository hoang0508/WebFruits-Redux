import React from "react";

const ShopFilter = () => {
  return (
    <div className="">
      <div className="flex items-center gap-x-3 rounded-lg p-3 bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 flex-shrink-0 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <div className="w-full">
          <input
            type="text"
            className="w-full outline-none bg-transparent text-sm font-medium"
            placeholder="Your Email"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
