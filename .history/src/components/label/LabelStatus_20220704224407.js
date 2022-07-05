import React from "react";
import styled from "styled-components";

const LabelStatusStyle = styled.span`
  padding: 15px 20px;
`;
const LabelStatus = ({ children, type = "default" }) => {
  let StyleClassName;
  switch (type) {
    case "new":
      StyleClassName = "text-green-500 bg-green-100";
      break;
    case "hot":
      StyleClassName = "text-orange-500 bg-orange-100";
      break;
    case "sale":
      StyleClassName = "text-yellow-500 bg-yellow-100";
      break;

    default:
      break;
  }
  return (
    <LabelStatusStyle className={StyleClassName}>{children}</LabelStatusStyle>
  );
};

export default LabelStatus;
