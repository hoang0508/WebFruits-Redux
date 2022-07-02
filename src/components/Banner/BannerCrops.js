import React from "react";
import bgrCrops from "../../assets/img/why-choose-bg.jpg";
import Accordion from "../Accordion/Accordion";
import PageLine from "../PageLine";
import "./BannerCrops.scss";

const dataAcc = [
  {
    id: 1,
    heading: "Organic",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse",
  },
  {
    id: 2,
    heading: "Fast And Easy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse",
  },
  {
    id: 3,
    heading: "High Quality",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse",
  },
];

const BannerCrops = ({ heading, children }) => {
  return (
    <section
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url(${bgrCrops})`,
      }}
    >
      <div className="container">
        <div className="banner-crops--content">
          <span className="banner-crops--txt">Why Choose Us</span>
          <div className="banner-crops--heading">
            <PageLine heading="We Are Ensure Of These Types">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse
            </PageLine>
          </div>
          {dataAcc &&
            dataAcc.length > 0 &&
            dataAcc.map((item) => (
              <Accordion key={item.id} item={item}></Accordion>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCrops;
