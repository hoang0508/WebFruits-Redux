import { Button } from "components/button";
import { Field } from "components/Field";
import ImageUpload from "components/images/ImageUpload";
import { Input } from "components/Input";
import { Label } from "components/label";
import Radio from "components/radio";
import useFirebase from "hooks/useFirebaseImage";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { productStatus } from "utils/contains";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import { toast } from "react-toastify";

const ProductAddNews = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      quantiti: "",
      content: "",
      priceNew: "",
      priceOld: "",
      image: "",
      image1: "",
      status: 1,
    },
  });
  //hook useImagefirebase
  const {
    progress,
    progress1,
    progress2,
    progress3,
    image,
    image1,
    image2,
    image3,
    handleResetUpload,
    handleDeleteImage,
    handleSelectImage,
    handleSelectImage1,
    handleSelectImage2,
    handleSelectImage3,
  } = useFirebase(setValue, getValues);

  // watch status
  const watchStatus = watch("status");

  // quill
  const [content, setContent] = useState("");
  //
  const handleAddNewProduct = async (values) => {
    const colRef = collection(db, "product");
    const cloneValues = { ...values };

    cloneValues.status = Number(values.status);
    await addDoc(colRef, {
      ...cloneValues,
      image,
      image1,
      image2,
      image3,
      content,
      createAt: serverTimestamp(),
    });
    //
    toast.success("Add new product successfully!!");
    //
    reset({
      name: "",
      quantiti: "",
      content: "",
      priceNew: "",
      priceOld: "",
      image: "",
      status: 1,
    });
    handleResetUpload();
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
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === productStatus.PRODUCT_HOT}
                  value={productStatus.PRODUCT_HOT}
                >
                  Hot
                </Radio>
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === productStatus.PRODUCT_SALE}
                  value={productStatus.PRODUCT_SALE}
                >
                  Sale
                </Radio>
              </div>
            </div>
          </Field>
        </div>
        <div className="mb-6">
          <Label>Image thumb</Label>
          <div className="flex gap-x-4 w-full mt-3">
            <div className="w-[25%]">
              <ImageUpload
                type="file"
                name="image1"
                image={image1}
                onChange={(e) => handleSelectImage1(e)}
                handleDeleteImage={handleDeleteImage}
                progress={progress1}
              ></ImageUpload>
            </div>
            <div className="w-[25%]">
              <ImageUpload
                type="file"
                name="image2"
                image={image2}
                onChange={(e) => handleSelectImage2(e)}
                handleDeleteImage={handleDeleteImage}
                progress={progress2}
              ></ImageUpload>
            </div>
            <div className="w-[25%]">
              <ImageUpload
                type="file"
                name="image3"
                image={image3}
                onChange={(e) => handleSelectImage3(e)}
                handleDeleteImage={handleDeleteImage}
                progress={progress3}
              ></ImageUpload>
            </div>
          </div>
        </div>
        <div className="form-layout">
          <Field>
            <Label>priceNew</Label>
            <Input control={control} type="text" name="priceNew"></Input>
          </Field>
          <Field>
            <Label>priceNew</Label>
            <Input control={control} type="text" name="priceOld"></Input>
          </Field>
        </div>
        <div className="w-full mb-10">
          <ReactQuill theme="snow" value={content} onChange={setContent} />
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
