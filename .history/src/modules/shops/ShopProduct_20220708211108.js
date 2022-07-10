import ProductItem from "modules/Product/ProductItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";
import { productStatus } from "utils/contains";
import "../../modules/Product/Product.scss";
const ShopProduct = () => {
  const dispatch = useDispatch();
  const [queryStatus, setQueryStatus] = useState("");
  console.log(
    "🚀 ~ file: ShopProduct.js ~ line 10 ~ ShopProduct ~ queryStatus",
    queryStatus
  );

  // data
  const { data } = useSelector((state) => state.products);

  // handleChange
  const handleChangeStatus = (e) => {
    if (e.target.value === 0)
      dispatch(
        getData({
          type: "all",
        })
      );
    else {
      dispatch(
        getData({
          type: "query",
          value: e.target.value,
        })
      );
    }
    setQueryStatus(e.target.value);
  };
  return (
    <div className="w-[70%]">
      <div className="flex justify-between mb-5">
        <div>
          We found <strong>{data.length}</strong> products available for you
        </div>
        <select onChange={(e) => handleChangeStatus(e)} value={queryStatus}>
          <option value={0}>All</option>
          <option value={1}>New</option>
          <option value={2}>Hot</option>
          <option value={3}>Sale</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <ProductItem key={item.id} item={item}></ProductItem>
          ))}
      </div>
    </div>
  );
};

export default ShopProduct;