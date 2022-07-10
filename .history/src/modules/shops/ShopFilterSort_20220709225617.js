import { Select } from "components/Select";
import React from "react";

const ShopFilterSort = () => {
  const handleChangeSort = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Price sort</h3>
      <Select onChange={(e) => handleChangeSort(e)}>
        <option value="">Giá: Tăng đần</option>
      </Select>
    </div>
  );
};

export default ShopFilterSort;
