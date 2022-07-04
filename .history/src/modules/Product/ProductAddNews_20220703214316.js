import { Button } from "components/button";
import { Field } from "components/Field";
import { Input } from "components/Input";
import { Label } from "components/label";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React from "react";
import { useForm } from "react-hook-form";

const ProductAddNews = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      quantiti: "",
      content: "",
      priceNew: "",
      priceOld: "",
      status: 1,
    },
  });
  return (
    <div>
      <DashboardHeading
        title="Product"
        desc="product add new"
      ></DashboardHeading>
      <form action="">
        <div className="form-layout">
          <Field>
            <Label>Product name</Label>
            <Input control={control} type="text" name="name"></Input>
          </Field>
          <Field>
            <Label>Quanlity</Label>
            <Input control={control} type="text" name="quantiti"></Input>
          </Field>
        </div>
        <Button type="submit">Add new product</Button>
      </form>
    </div>
  );
};

export default ProductAddNews;
