import React from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import "./ModalPd.scss";
import { FaTimes } from "react-icons/fa";
import Productdetails from "../Product/Productdetails";
import { AuthProvider } from "../context/Auth-Context.js";

const ModalProduct = React.memo(({ urlM, setShow }) => {
  // urlM, api
  const { value: item } = useHookAPI(urlM);
  const { images } = item;
  // close modal
  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <AuthProvider images={images}>
      <div className="modalP">
        <div className="modalP-content">
          <div
            className="modalP-content--close"
            onClick={() => handleCloseModal()}
          >
            <FaTimes />
          </div>

          <Productdetails item={item} />
        </div>
      </div>
    </AuthProvider>
  );
});

export default ModalProduct;
