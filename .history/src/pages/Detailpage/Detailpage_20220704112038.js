import Productdetails from "modules/Product/Productdetails";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUser } from "redux/users/userSlice";

import bannerDetails from "../../assets/img/page-banner-5.jpg";
import "./Detailpage.scss";

const Detailpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  });
  return (
    <div className="details">
      <div
        className="details-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerDetails})` }}
      >
        <div className="overlay"></div>
        <h3 className="details-heading">Details Page</h3>
      </div>
      <div className="details-list">
        <div className="container">
          <Productdetails />
        </div>
      </div>
      {/* <Info item={item} /> */}
    </div>
  );
};

export default Detailpage;
