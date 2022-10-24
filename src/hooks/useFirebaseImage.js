import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const useFirebase = (setValue, getValues, imageName = null, cb) => {
  // Progess
  const [progress, setProgress] = useState(0);
  //
  const [progress1, setProgress1] = useState(0);
  //
  const [progress2, setProgress2] = useState(0);
  //
  const [progress3, setProgress3] = useState(0);

  // Image
  const [image, setImage] = useState("");
  //
  const [image1, setImage1] = useState("");
  //
  const [image2, setImage2] = useState("");
  //
  const [image3, setImage3] = useState("");

  // handleUploadImage
  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressPercen =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercen);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all!!");
        }
      },
      (error) => {
        console.log("Error!!");
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };

  // handleUploadImage1
  const handleUploadImage1 = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressPercen =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress1(progressPercen);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all!!");
        }
      },
      (error) => {
        console.log("Error!!");
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage1(downloadURL);
        });
      }
    );
  };

  // handleUploadImage2
  const handleUploadImage2 = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressPercen =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress2(progressPercen);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all!!");
        }
      },
      (error) => {
        console.log("Error!!");
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage2(downloadURL);
        });
      }
    );
  };

  // handleUploadImage2
  const handleUploadImage3 = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressPercen =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress3(progressPercen);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all!!");
        }
      },
      (error) => {
        console.log("Error!!");
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage3(downloadURL);
        });
      }
    );
  };

  // onSelectImage
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("image_name", file.name);
    handleUploadImage(file);
  };

  const handleSelectImage1 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("image_name1", file.name);
    handleUploadImage1(file);
  };

  const handleSelectImage2 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("image_name2", file.name);
    handleUploadImage2(file);
  };

  const handleSelectImage3 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("image_name3", file.name);
    handleUploadImage3(file);
  };

  // Delete Image
  const handleDeleteImage = () => {
    const storage = getStorage();

    // Create a reference to the file to delete
    const imageRef = ref(
      storage,
      "images/" + (imageName || getValues("image_name"))
    );

    // Delete the file
    deleteObject(imageRef)
      .then(() => {
        // File deleted successfully
        console.log("Remove image successfully!!");
        setImage("");
        setProgress(0);
        cb && cb();
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log("Can not delete image!!");
      });
  };

  // Reset Upload
  const handleResetUpload = () => {
    setImage("");
    setProgress("");
  };
  return {
    progress,
    progress1,
    progress2,
    progress3,
    image,
    image1,
    image2,
    image3,
    setImage,
    setImage1,
    setImage2,
    setImage3,
    handleResetUpload,
    handleDeleteImage,
    handleSelectImage,
    handleSelectImage1,
    handleSelectImage2,
    handleSelectImage3,
  };
};

export default useFirebase;
