import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { getData } from "redux/products/productSlice";
import Radio from "components/radio";
import { useForm } from "react-hook-form";
import { Checkbox } from "components/Checkbox";

const ShopFilter = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useDispatch();
  // useForm
  const { control, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      price: "",
    },
  });
  // watch price
  const watchPrice = watch("price");
  // Search product
  const handleSearchProduct = debounce((e) => {
    dispatch(
      getData({
        type: "search",
        value: e.target.value,
      })
    );
    setSearchProduct(e.target.value);
  }, 500);

  // Filter price
  const handleFilterPrice = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      dispatch(
        getData({
          type: "price",
          value: Number(e.target.value),
        })
      );
    } else {
      dispatch(
        getData({
          type: "all",
        })
      );
    }
  };
  return (
    <div className="bg-white shadow-lg w-[30%] p-4">
      <h3 className="text-lg font-medium mb-2">Search product</h3>
      <div className="flex items-center gap-5 w-[full] border border-gray-200 rounded-lg py-3 px-5">
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
          onChange={(e) => handleSearchProduct(e)}
          type="text"
          className="w-full outline-none"
          placeholder="Enter search product..."
        />
      </div>
      <h3 className="text-lg font-medium my-[10px]">Price range</h3>
      <Checkbox name="price" onChange={(e) => handleFilterPrice(e)} value={30}>
        $30.00 - $45.00
      </Checkbox>
      <Checkbox name="price" onChange={(e) => handleFilterPrice(e)} value={50}>
        $50.00 - $80.00
      </Checkbox>
      <Checkbox name="price" onChange={(e) => handleFilterPrice(e)} value={80}>
        $80.00 - $100.00
      </Checkbox>
      <Checkbox name="price" onChange={(e) => handleFilterPrice(e)} value={100}>
        $100.00 - $150.00
      </Checkbox>
    </div>
  );
};

export default ShopFilter;