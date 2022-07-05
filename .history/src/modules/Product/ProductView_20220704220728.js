import { Table } from "components/Table";
import React from "react";
import { useSelector } from "react-redux";

const ProductView = () => {
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
