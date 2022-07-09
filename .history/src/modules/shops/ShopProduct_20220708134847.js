import ProductItem from "modules/Product/ProductItem";
import React from "react";
import { useSelector } from "react-redux";

const ShopProduct = () => {
  const { data } = useSelector((state) => state.products);
  return (
    <div className="grid grid-cols-2">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <ProductItem key={item.id} item={item}></ProductItem>
        ))}
    </div>
  );
};

export default ShopProduct;
