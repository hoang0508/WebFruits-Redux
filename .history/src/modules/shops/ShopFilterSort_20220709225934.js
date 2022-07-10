import { Select } from "components/Select";
import React, { useState } from "react";

const ShopFilterSort = () => {
  const [sort, setSort] = useState();
  console.log(
    "🚀 ~ file: ShopFilterSort.js ~ line 6 ~ ShopFilterSort ~ sort",
    sort
  );
  const handleChangeSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Price sort</h3>
      <Select onChange={(e) => handleChangeSort(e)}>
        <option value="1">Giá: Tăng đần</option>
        <option value="2">Giá: giảm đần</option>
      </Select>
    </div>
  );
};

export default ShopFilterSort;
