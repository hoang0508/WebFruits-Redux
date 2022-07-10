import LoadingSkeleton from "components/Loading/LoadingSkeleton";
import React from "react";
import {
  FaCartPlus,
  FaRegHeart,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { productStatus } from "utils/contains";
const ProductItem = ({ item }) => {
  // Navigate
  const navigate = useNavigate();
  const handleNavigateDetail = () => {
    navigate(`/details/${item.id}`);
  };
  const { loading } = useSelector((state) => state.products);
  console.log(
    "🚀 ~ file: ProductItem.js ~ line 20 ~ ProductItem ~ loading",
    loading
  );
  return (
    <>
      {loading &&
        <>
          <ProductItemLoading />
          <ProductItemLoading />
          <ProductItemLoading />
        </>
      }
{ !loading &&
        <div
          className="product-item"
          onClick={() => handleNavigateDetail(item.id)}
        >
          <div className="product-images">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              onClick={() => handleNavigateDetail()}
            />
            <div className="product-select">
              <span
                className="product-select--icon"
                // onClick={() => handleAddToCart(item)}
              >
                <FaCartPlus />
              </span>
              <span className="product-select--icon">
                <FaRegHeart />
              </span>
              <span
                className="product-select--icon"
                // onClick={(e, id) => handleModalP(e, item.id)}
              >
                <FaSearch />
              </span>
            </div>
          </div>
          <span className="product-seo">
            {Number(item.status) === productStatus.PRODUCT_SALE && "Sale"}
            {Number(item.status) === productStatus.PRODUCT_NEW && "New"}
            {Number(item.status) === productStatus.PRODUCT_HOT && "Hot"}
          </span>
          <div className="product-info">
            <h3 className="product-name" onClick={() => handleNavigateDetail()}>
              {item.name}
            </h3>
            <div className="product-price">
              <span className="product-price--new">${item.priceNew}</span>
              <span className="product-price--old">${item.priceOld}</span>
            </div>
            <div className="product-star">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaRegStar />
              </span>
            </div>
          </div>
        </div>
      )}
      {/* {show && <ModalProduct urlM={urlM} setShow={setShow} />} */}
    </>
  );
};

const ProductItemLoading = () => {
  return (
    <div className="product-item">
      <div className="product-images">
        <LoadingSkeleton width="100%" height="300px" radius="5px" />

        <div className="product-select">
          <span className="product-select--icon">
            <FaCartPlus />
          </span>
          <span className="product-select--icon">
            <FaRegHeart />
          </span>
          <span
            className="product-select--icon"
            // onClick={(e, id) => handleModalP(e, item.id)}
          >
            <FaSearch />
          </span>
        </div>
      </div>
      <span className="product-seo">
        <LoadingSkeleton width="30px" height="30px" radius="5px" />
      </span>
      <div className="product-info">
        <LoadingSkeleton width="100%" height="10px" />
        <div className="product-price">
          <LoadingSkeleton width="30px" height="30px" />
          <span className="product-price--new"></span>
          <LoadingSkeleton width="30px" height="30px" />
          <span className="product-price--old"></span>
        </div>
        <div className="product-star">
          <LoadingSkeleton width="100%" height="30px" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
