import { Checkbox } from "components/Checkbox";
import React from "react";
import { useDispatch } from "react-redux";
import { getData } from "redux/products/productSlice";

const ShopFilterPrice = () => {
  const dispatch = useDispatch();
  // Filter price
  const handleFilterPrice = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      dispatch(
        getData({
          type: "filterprice",
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
    <div>
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

export default ShopFilterPrice;
