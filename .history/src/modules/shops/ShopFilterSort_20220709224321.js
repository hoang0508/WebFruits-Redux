import { Select } from "components/Select";
import React from "react";

const ShopFilterSort = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Price sort</h3>
      <Select>
        <option value="">Giá: Tăng đần</option>
      </Select>
    </div>
  );
};

export default ShopFilterSort;
