import ProductItem from "modules/Product/ProductItem";
import React from "react";
import { useSelector } from "react-redux";
import { productStatus } from "utils/contains";
import "../../modules/Product/Product.scss";
const ShopProduct = () => {
  const { data } = useSelector((state) => state.products);
  const handleChangeStatus = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleChangeStatus(e)}>
          <option value="">All</option>
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
