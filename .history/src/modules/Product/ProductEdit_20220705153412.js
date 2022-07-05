import { Field } from "components/Field";
import ImageUpload from "components/images/ImageUpload";
import { Input } from "components/Input";
import { Label } from "components/label";
import Radio from "components/radio";
import useFirebase from "hooks/useFirebaseImage";
import DashboardHeading from "modules/Dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { productStatus } from "utils/contains";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "components/button";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "redux/products/productSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import { toast } from "react-toastify";

const ProductEdit = () => {
  // useForm
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
      status: 1,
    },
  });
  // getvalue image
  const imageUrl = getValues("image");
  const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
  const imageName = imageRegex && imageRegex?.length > 0 ? imageRegex[1] : "";
  //hook useImagefirebase
  const {
    progress,
    image,
    setImage,
    handleResetUpload,
    handleDeleteImage,
    handleSelectImage,
  } = useFirebase(setValue, getValues, imageName);

  // watch status
  const watchStatus = watch("status");
  // quill
  const [content, setContent] = useState("");
  //
  // param
  const [param] = useSearchParams();
  const idName = param.get("id");

  // useEffect dispatch
  const dispatch = useDispatch();

  // useSelector
  const data = useSelector((state) => state.products.dataDetails);
  // useEffect
  useEffect(() => {
    reset(
      dispatch(
        getData({
          type: "id",
          value: idName,
        })
      )
    );
  }, [dispatch, idName, reset]);

  useEffect(() => {
    reset(data);
  }, [reset, data]);

  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl, setImage]);

  const handleEditProduct = async (values) => {
    try {
      const colRef = doc(db, "product", idName);
      await updateDoc(colRef, {
        ...values,
        image,
      });
      toast.success("Update product successfully!!");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div>
        <DashboardHeading
          title="Product"
          desc="product add new"
        ></DashboardHeading>
        <form action="" onSubmit={handleSubmit(handleEditProduct)}>
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
                image={image || imageUrl}
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
            <ReactQuill
              theme="snow"
              name="content"
              value={content}
              onChange={setContent}
            />
          </div>
          <Button
            type="submit"
            maxWidth="250px"
            height="56px"
            className="button button--primary"
            isLoading={isSubmitting}
          >
            Edit product
          </Button>
        </form>
      </div>
    </>
  );
};

export default ProductEdit;
