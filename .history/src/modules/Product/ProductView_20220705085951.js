import ActionDelete from "components/Action/ActionDelete";
import ActionEdit from "components/Action/ActionEdit";
import LabelStatus from "components/label/LabelStatus";
import { Table } from "components/Table";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React from "react";
import { useSelector } from "react-redux";
import { productStatus } from "utils/contains";

const ProductView = () => {
  const { data } = useSelector((state) => state.products);
  return (
    <div>
      <DashboardHeading title="Product manager"></DashboardHeading>
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
                <td>
                  <div className="flex gap-x-3">
                    <ActionEdit />
                    <ActionDelete />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductView;