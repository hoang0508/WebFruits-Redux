import React from "react";
import PageLine from "../../PageLine";
import blogImg1 from "../../../assets/img/blog-1.jpg";
import blogImg2 from "../../../assets/img/blog-2.jpg";
import blogImg3 from "../../../assets/img/blog-3.jpg";
import blogImg4 from "../../../assets/img/blog-4.jpg";
import blogImg5 from "../../../assets/img/blog-5.jpg";
import blogImg6 from "../../../assets/img/blog-6.jpg";
import blogImg7 from "../../../assets/img/blog-7.jpg";
import blogImg8 from "../../../assets/img/blog-8.jpg";
import blogImg9 from "../../../assets/img/blog-9.jpg";
import blogImg10 from "../../../assets/img/blog-10.jpg";
import blogImg11 from "../../../assets/img/blog-11.jpg";
import blogImg12 from "../../../assets/img/blog-12.jpg";

import "./LastestBlog.scss";
const dataBlog = [
  {
    id: 1,
    images: `${blogImg1}`,
    date: "20-04-2022",
    title: "What You Should Know About Detox Water",
  },
  {
    id: 2,
    images: `${blogImg2}`,
    date: "18-04-2022",
    title: "Better Hot Drink Elegant You Can Order By Online",
  },
  {
    id: 3,
    images: `${blogImg3}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 4,
    images: `${blogImg4}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 5,
    images: `${blogImg5}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 6,
    images: `${blogImg6}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 7,
    images: `${blogImg7}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 8,
    images: `${blogImg8}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 9,
    images: `${blogImg9}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 9,
    images: `${blogImg9}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 10,
    images: `${blogImg10}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 11,
    images: `${blogImg11}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
  {
    id: 12,
    images: `${blogImg12}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
];

const LastestBlog = ({ heading, dataHome }) => {
  let start = 0;
  let end = 3;

  const sliceStart = dataHome ? start : 0;
  const sliceEnd = dataHome ? end : 12;
  return (
    <section className="LastestBlog">
      {heading && (
        <PageLine heading={heading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </PageLine>
      )}
      <div className="container">
        <div className="LastestBlog-list">
          {dataBlog &&
            dataBlog.length > 0 &&
            dataBlog.slice(sliceStart, sliceEnd).map((item) => (
              <div className="LastestBlog-item" key={item.id}>
                <div className="LastestBlog-images">
                  <img src={item.images} alt="" />
                  <div className="LastestBlog-date">{item.date}</div>
                </div>
                <div className="LastestBlog-content">
                  <div className="LastestBlog-title">{item.title}</div>
                  <div className="LastestBlog-more">Read more</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LastestBlog;
