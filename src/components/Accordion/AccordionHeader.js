import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAccContext } from "./AccordionContext";
const AccordionHeader = ({ heading }) => {
  const { show, handleClickShow } = useAccContext();
  return (
    <div className="accordion-header" onClick={handleClickShow}>
      <span className="accordion-heading">{heading}</span>
      {show ? (
        <span className="accordion-icon">
          <FaPlus />
        </span>
      ) : (
        <span className="accordion-icon">
          <FaMinus />
        </span>
      )}
    </div>
  );
};

export default AccordionHeader;
