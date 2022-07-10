import React from "react";
import ShopFilterPrice from "./ShopFilterPrice";
import ShopFilterProduct from "./ShopFilterProduct";
import ShopFilterSort from "./ShopFilterSort";
import "./ShopFilter.scss";
import styled from "styled-components";

const ShopFilterStyles = styled.div`
  h3 {
    display: inline-block;
    position: relative;
    ::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 100%;
      width: 100px;
      height: 3px;
      background-color: #ff6651;
    }
  }
`;

const ShopFilter = () => {
  return (
    <ShopFilterStyles className="bg-white shadow-lg w-[30%] p-4">
      <ShopFilterProduct />
      <ShopFilterPrice />
      <ShopFilterSort />
    </ShopFilterStyles>
  );
};

export default ShopFilter;
