import LabelStatus from "components/label/LabelStatus";
import { Table } from "components/Table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";
import { productStatus } from "utils/contains";

const ProductView = () => {
  const { data } = useSelector((state) => state.products);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Image</th>
            <th>Price new</th>
            <th>Price old</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((product) => (
              <tr key={product.id}>
                <td>{product.id.slice(0, 5) + "..."}</td>
                <td>{product.name}</td>
                <td>
                  <div>
                    <img
                      src={product.image}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                </td>
                <td>${product.priceNew}</td>
                <td>${product.priceOld}</td>
                <td>
                  {product.status === productStatus.PRODUCT_NEW && (
                    <LabelStatus type="new">New</LabelStatus>
                  )}
                  {product.status === productStatus.PRODUCT_HOT && (
                    <LabelStatus type="hot">Hot</LabelStatus>
                  )}
                  {product.status === productStatus.PRODUCT_SALE && (
                    <LabelStatus type="sale">Sale</LabelStatus>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductView;
