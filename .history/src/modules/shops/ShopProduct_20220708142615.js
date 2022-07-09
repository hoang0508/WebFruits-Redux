import ProductItem from "modules/Product/ProductItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";
import { productStatus } from "utils/contains";

const ShopProduct = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(
  //     getData({
  //       type: "all",
  //     })
  //   );
  // }, [dispatch]);
  const { data } = useSelector((state) => state.products);
  console.log("🚀 ~ file: ShopProduct.js ~ line 9 ~ ShopProduct ~ data", data);
  return (
    <div>
      <div>
        <select>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <option key={item.id} value={item.status}>
                {Number(item.status) === productStatus.PRODUCT_HOT}
                {Number(item.status) === productStatus.PRODUCT_NEW}
                {Number(item.status) === productStatus.PRODUCT_SALE}
              </option>
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
