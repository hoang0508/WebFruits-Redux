import ProductItem from "modules/Product/ProductItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";
import { productStatus } from "utils/contains";
import "../../modules/Product/Product.scss";
const ShopProduct = () => {
  const dispatch = useDispatch();
  const [queryStatus, setQueryStatus] = useState("");
  useEffect(() => {
    dispatch(
      getData({
        type: "query",
      })
    );
  }, [dispatch, queryStatus]);
  const { data } = useSelector((state) => state.products);

  console.log(
    "🚀 ~ file: ShopProduct.js ~ line 19 ~ ShopProduct ~ queryStatus",
    queryStatus
  );
  const handleChangeStatus = (e) => {
    if (e.target.value === "0")
      dispatch(
        getData({
          type: "all",
        })
      );
    dispatch(getData({ type: "query", value: e.target.value }));
    setQueryStatus(e.target.value);
  };
  return (
    <div>
      <div>
        <select onChange={(e) => handleChangeStatus(e)} value={queryStatus}>
          <option value="0">All</option>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <React.Fragment key={item.id}>
                <option value={item.status}>
                  {Number(item.status) === productStatus.PRODUCT_HOT && "Hot"}
                  {Number(item.status) === productStatus.PRODUCT_NEW && "New"}
                  {Number(item.status) === productStatus.PRODUCT_SALE && "Sale"}
                </option>
              </React.Fragment>
            ))}
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
