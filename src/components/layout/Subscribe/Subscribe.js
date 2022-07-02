import React from "react";
import PageLine from "../../PageLine";
import "./Subscribe.scss";
const Subscribe = ({ heading }) => {
  return (
    <section className="subscribe">
      <div className="container subscribe-container">
        <div className="subscribe-content">
          <PageLine heading={heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse
          </PageLine>
        </div>
        <div className="subscribe-email">
          <input
            type="text"
            placeholder="Enter email address"
            className="subscribe-input"
          />
          <button className="button button--primary">Subscibe now</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
