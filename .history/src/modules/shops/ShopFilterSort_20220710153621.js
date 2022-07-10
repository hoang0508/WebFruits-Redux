import { Select } from "components/Select";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";
import { productSortPrice } from "utils/contains";

const ShopFilterSort = () => {
  const [sort, setSort] = useState();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  console.log(
    "🚀 ~ file: ShopFilterSort.js ~ line 11 ~ ShopFilterSort ~ data",
    data
  );
  const handleChangeSort = (e) => {
    const demo = data.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(
      "🚀 ~ file: ShopFilterSort.js ~ line 17 ~ handleChangeSort ~ demo",
      demo
    );
    // if (e.target.value === "0") {
    //   dispatch(
    //     getData({
    //       type: "all",
    //     })
    //   );
    // } else {
    //   dispatch(
    //     getData({
    //       type: "sortPrice",
    //       value: e.target.value,
    //     })
    //   );
    // }
    setSort(e.target.value);
  };
  return (
    <>
      <h3 className="text-lg font-medium mb-2">Price sort</h3>
      <div className="w-full">
        <Select value={sort} onChange={(e) => handleChangeSort(e)}>
          <option value={"0"}>Mặc định</option>
          <option value={productSortPrice.SORT_INCREA}>Giá: Tăng đần</option>
          <option value={productSortPrice.SORT_DECREA}>Giá: giảm đần</option>
        </Select>
      </div>
    </>
  );
};

export default ShopFilterSort;
