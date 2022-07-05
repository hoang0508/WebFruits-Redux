import { Table } from "components/Table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";

const ProductView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const { data } = useSelector((state) => state.products);
  console.log("🚀 ~ file: ProductView.js ~ line 7 ~ ProductView ~ data", data);
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
      </Table>
    </div>
  );
};

export default ProductView;
