import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "redux/products/productSlice";
import { useForm } from "react-hook-form";
import { Checkbox } from "components/Checkbox";
import ShopFilterProduct from "./ShopFilterProduct";

const ShopFilter = () => {
  const dispatch = useDispatch();
  // useForm
  const { control, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      price: "",
    },
  });

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
      <ShopFilterProduct />
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
