/** @format */

import { useState } from "react";

export const useInput = (initiallValue) => {
  const [value, setValue] = useState(initiallValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue(initiallValue);
  };
  return { value, onChange, reset, setValue };
};
