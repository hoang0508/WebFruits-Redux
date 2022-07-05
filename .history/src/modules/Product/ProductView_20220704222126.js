import { Table } from "components/Table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";

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
                    <img src={product.image} alt="" />
                  </div>
                </td>
                {/* <td>{product.name}</td> */}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductView;
