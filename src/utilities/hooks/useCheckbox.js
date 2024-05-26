"use client";

import { useState } from "react";

export const useCheckbox = () => {
  const [value, setValue] = useState(false);

  function onChange() {
    setValue((prev) => !prev);
  }

  return { value, onChange };
};
