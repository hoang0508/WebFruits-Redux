import React from "react";
import { useAccContext } from "./AccordionContext";

const AccordionContent = ({ content }) => {
  const { show } = useAccContext();
  return (
    <div
      className={`${show ? "accordion-content--active" : "accordion-content"}`}
    >
      {content}
    </div>
  );
};

export default AccordionContent;
