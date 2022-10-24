import Productdetails from "modules/Product/Productdetails";
import Review from "modules/Reviews/Review";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getData, getDataId } from "redux/products/productSlice";
import { getDataReview } from "redux/reviews/reviewSlice";

import bannerDetails from "../../assets/img/page-banner-5.jpg";
import "./Detailpage.scss";

const Detailpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getData({
        type: "id",
        value: id,
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getDataReview());
  }, [dispatch]);
  return (
    <div className="details">
      <div
        className="details-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerDetails})` }}
      >
        <div className="overlay"></div>
        <h3 className="details-heading  heading-page">Details Page</h3>
      </div>
      <div className="details-list">
        <div className="container">
          <Productdetails id={id} />
        </div>
      </div>
      <Review />
    </div>
  );
};

export default Detailpage;
