import ProductItem from "modules/Product/ProductItem";
import React from "react";
import { useSelector } from "react-redux";

const ShopProduct = () => {
  const { data } = useSelector((state) => state.products);
  return (
    <div>
      <div className="">
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
