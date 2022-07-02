import React, { createContext, useContext } from "react";
import useHookBoolean from "../../hooks/useHookBoolean";

const AccordionContext = createContext(undefined);

const AccordionProvider = ({ ...props }) => {
  const { value: show, handleClickValue: handleClickShow } = useHookBoolean();
  const values = { show, handleClickShow };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
};

function useAccContext() {
  const context = useContext(AccordionContext);
  if (context === "undefined") throw new Error("Error Context");
  return context;
}

export { useAccContext, AccordionProvider };
