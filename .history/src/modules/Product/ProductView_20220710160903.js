import ActionDelete from "components/Action/ActionDelete";
import ActionEdit from "components/Action/ActionEdit";
import { Button } from "components/button";
import LabelStatus from "components/label/LabelStatus";
import { Table } from "components/Table";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getData } from "redux/products/productSlice";
import { productStatus } from "utils/contains";

const ProductView = () => {
  const { data } = useSelector((state) => state.products);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getData({
        type: "all",
      })
    );
  }, [dispatch]);
  // search filter
  const handleChangeFilter = (e) => {
    dispatch(
      getData({
        type: "search",
        value: e.target.value,
      })
    );
    setFilter(e.target.value);
  };
  // load more
  const [lastDoc, setLastDoc] = useState();
  const handleLoadMore = async () => {
    const first = query(collection(db, "product"), orderBy("name"), limit(1));
    const documentSnapshots = await getDocs(first);

    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];

    dispatch(
      getData({
        type: "all",
      })
    );
  };
  // navigate
  const navigate = useNavigate();

  // handleEdit
  const handleActionEdit = (id) => {
    navigate(`/manage/edit-product?id=${id}`);
  };

  // handleDelete
  const handleActionDelete = async (id) => {
    dispatch(
      getData({
        type: "delete",
        value: id,
      })
    );
  };
  return (
    <div>
      <DashboardHeading title="Product manager"></DashboardHeading>
      <div className="flex justify-between">
        <Button
          className="button bg-orange-500 !rounded-none"
          to={`/manage/add-product`}
        >
          Product Add New
        </Button>
        <input
          type="text"
          className="p-3 border border-gray-200 rounded mb-4"
          value={filter}
          placeholder="Search product"
          onChange={(e) => handleChangeFilter(e)}
        />
      </div>
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
                  {Number(product.status) === productStatus.PRODUCT_NEW && (
                    <LabelStatus type="new">New</LabelStatus>
                  )}
                  {Number(product.status) === productStatus.PRODUCT_HOT && (
                    <LabelStatus type="hot">Hot</LabelStatus>
                  )}
                  {Number(product.status) === productStatus.PRODUCT_SALE && (
                    <LabelStatus type="sale">Sale</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="flex gap-x-3">
                    <ActionEdit onClick={() => handleActionEdit(product.id)} />
                    <ActionDelete
                      onClick={() => handleActionDelete(product.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* <button onClick={() => handleLoadMore()}>Load more</button> */}
    </div>
  );
};

export default ProductView;
