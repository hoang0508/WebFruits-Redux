import ProductItem from "modules/Product/ProductItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";
import { productStatus } from "utils/contains";
import "../../modules/Product/Product.scss";
const ShopProduct = () => {
  const dispatch = useDispatch();
  const [queryStatus, setQueryStatus] = useState("");

  // data
  const { data } = useSelector((state) => state.products);

  const status = data.map((item) => item.status);
  const dataStatus = [...new Set(status)];
  // handleChange
  const handleChangeStatus = (e) => {
    if (e.target.value === "0")
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
        <select
          className="w-[200px] p-[5px] border cursor-pointer border-gray-300 rounded-md"
          onChange={(e) => handleChangeStatus(e)}
          value={queryStatus}
        >
          <option value="0">All</option>
          {dataStatus.length > 0 &&
            dataStatus.map((status, index) => (
              <option key={index} value={status}>
                {status === productStatus.PRODUCT_NEW && "New"}
                {status === productStatus.PRODUCT_HOT && "Hot"}
                {status === productStatus.PRODUCT_SALE && "Sale"}
              </option>
            ))}
        </select>
      </div>
      {!data && !data?.length > 0 && <div>Không tìm thấy kết quả nào!!</div>}
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
