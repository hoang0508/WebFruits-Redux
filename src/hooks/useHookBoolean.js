import { useState } from "react";

const useHookBoolean = () => {
  const [value, setValue] = useState(false);
  const handleClickValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleClickValue,
  };
};

export default useHookBoolean;
