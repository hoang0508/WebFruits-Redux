import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "redux-saga/effects";
import { getData } from "redux/products/productSlice";

const ShopFilter = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useDispatch();
  const handleSearchProduct = debounce((e) => {
    dispatch(
      getData({
        type: "search",
        value: e.target.value,
      })
    );
    setSearchProduct(e.target.value);
  }, 500);
  return (
    <div className="bg-white shadow-lg w-[30%] p-4">
      <h3 className="text-lg font-medium mb-2">Search product</h3>
      <div className="flex items-center gap-5 w-[300px] border border-gray-200 rounded-lg py-3 px-5">
        <span className="flex-shrink-0 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          value={searchProduct}
          onChange={(e) => handleSearchProduct(e)}
          type="text"
          className="w-full outline-none"
          placeholder="Enter search product..."
        />
      </div>
    </div>
  );
};

export default ShopFilter;
