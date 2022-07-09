import ProductItem from "modules/Product/ProductItem";
import React from "react";
import { useSelector } from "react-redux";
import { productStatus } from "utils/contains";
import "../../modules/Product/Product.scss";
const ShopProduct = () => {
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
                {Number(item.status) === productStatus.PRODUCT_HOT && "Hot"}
                {Number(item.status) === productStatus.PRODUCT_NEW && "New"}
                {Number(item.status) === productStatus.PRODUCT_SALE && "Sale"}
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
