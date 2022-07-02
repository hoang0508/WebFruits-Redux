import React from "react";

import "./Accordion.scss";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./AccordionContext";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({ item }) => {
  const { heading, content } = item;

  return (
    <AccordionProvider>
      <div className="accordion">
        <AccordionHeader heading={heading}></AccordionHeader>
        <AccordionContent content={content}></AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
