import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "firebases/Firebase-config";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import { Button } from "components/button";
Quill.register("modules/imageUploader", ImageUploader);

const ReviewWrite = ({ id, userInfo, like }) => {
  const [content, setContent] = useState("");
  // useForm
  const { handleSubmit } = useForm({
    mode: "onChange",
  });
  // handle submit review
  const handleSubmitReview = async (values) => {
    const colRef = collection(db, "review");
    await addDoc(colRef, {
      idProduct: id,
      userId: userInfo.uid,
      username: userInfo?.displayName,
      content,
      createAt: serverTimestamp(),
    });
  };

  // upload image
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const reponse = await axios({
            method: "POST",
            url: "https://api.imgbb.com/1/upload?key=3bbc75e201e1e8be18b8aa12249b605d",
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return reponse.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="write">
      <h3 className="review__heading">Nhận xét về sản phẩm</h3>
      {userInfo?.displayName ? (
        <form
          className="write-form"
          onSubmit={handleSubmit(handleSubmitReview)}
        >
          <div className="write-form--group w-full">
            <ReactQuill
              placeholder="Mời bạn nhập vào đây...!"
              modules={modules}
              className="w-full"
              theme="snow"
              name="content"
              value={content}
              onChange={setContent}
            />
          </div>
          <button type="submit" className="button button--secondary">
            Gửi nhận xét
          </button>
        </form>
      ) : (
        <div>
          <Button
            to="/sign-in"
            className="button !m-0 bg-orange-500 !w-[250px]"
          >
            Mời bạn đăng nhập!!
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewWrite;
