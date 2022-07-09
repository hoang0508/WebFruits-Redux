import ProductItem from "modules/Product/ProductItem";
import React from "react";
import { useSelector } from "react-redux";
import { productStatus } from "utils/contains";

const ShopProduct = () => {
  const { data } = useSelector((state) => state.products);
  return (
    <div>
      <div>
        <select>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <option key={data.id} value={item.status}>
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
