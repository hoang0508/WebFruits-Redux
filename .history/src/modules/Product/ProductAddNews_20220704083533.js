import { Button } from "components/button";
import { Field } from "components/Field";
import Radio from "components/Form/Radio";
import ImageUpload from "components/images/ImageUpload";
import { Input } from "components/Input";
import { Label } from "components/label";
import useFirebase from "hooks/useFirebaseImage";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React from "react";
import { useForm } from "react-hook-form";

const ProductAddNews = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      quantiti: "",
      content: "",
      priceNew: "",
      priceOld: "",
      image: "",
      status: 1,
    },
  });
  //hook useImagefirebase
  const {
    progress,
    image,
    handleResetUpload,
    handleDeleteImage,
    handleSelectImage,
  } = useFirebase(setValue, getValues);
  console.log(
    "🚀 ~ file: ProductAddNews.js ~ line 38 ~ ProductAddNews ~ image",
    image
  );

  //
  const handleAddNewProduct = (values) => {
    // console.log(
    //   "🚀 ~ file: ProductAddNews.js ~ line 26 ~ handleAddNewProduct ~ values",
    //   values
    // );
  };
  return (
    <div>
      <DashboardHeading
        title="Product"
        desc="product add new"
      ></DashboardHeading>
      <form action="" onSubmit={handleSubmit(handleAddNewProduct)}>
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
        <div className="form-layout">
          <Field>
            <Label>Image product</Label>
            <ImageUpload
              type="file"
              name="image"
              image={image}
              onChange={(e) => handleSelectImage(e)}
              handleDeleteImage={handleDeleteImage}
              progress={progress}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Status</Label>
            <div className="flex">
              <div>
                <Label></Label>
                <Radio name="status" control={control}>
                  New
                </Radio>
              </div>
            </div>
          </Field>
        </div>
        <Button
          type="submit"
          maxWidth="250px"
          height="56px"
          className="button button--primary"
          isLoading={isSubmitting}
        >
          Add new product
        </Button>
      </form>
    </div>
  );
};

export default ProductAddNews;
