import { Button } from "components/button";
import { Field } from "components/Field";
import ImageUpload from "components/images/ImageUpload";
import { Input } from "components/Input";
import { Label } from "components/label";
import Radio from "components/radio";
import useFirebase from "hooks/useFirebaseImage";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React from "react";
import { useForm } from "react-hook-form";
import { productStatus } from "utils/contains";

const ProductAddNews = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
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
  const watchStatus = watch("status");

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
            <div>
              <div className="flex gap-x-4">
                <Label></Label>
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === productStatus.PRODUCT_NEW}
                  value={productStatus.PRODUCT_NEW}
                >
                  New
                </Radio>
                <Radio name="status" control={control}>
                  Sale
                </Radio>
                <Radio name="status" control={control}>
                  Hot
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
