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
    defaultValues: {},
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
            <Input control={control} type="text"></Input>
          </Field>
          <Field>
            <Label>Product name</Label>
            <Input control={control} type="text"></Input>
          </Field>
        </div>
      </form>
    </div>
  );
};

export default ProductAddNews;
