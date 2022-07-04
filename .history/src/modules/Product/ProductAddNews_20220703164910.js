import { Input } from "components/Input";
import { Label } from "components/label";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React from "react";

const ProductAddNews = () => {
  return (
    <div>
      <DashboardHeading
        title="Product"
        desc="product add new"
      ></DashboardHeading>
      <form action="">
        <div className="form-layout">
          <Label>Product name</Label>
          <Input></Input>
        </div>
      </form>
    </div>
  );
};

export default ProductAddNews;
