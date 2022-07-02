import React from "react";

const PageLine = ({ heading, children }) => {
  return (
    <div className="page-center">
      <h3 className="page-heading">{heading}</h3>
      <h3 className="page-desc">{children}</h3>
    </div>
  );
};

export default PageLine;
