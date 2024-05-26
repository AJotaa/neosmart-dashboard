"use client";

import { useState } from "react";

export const useFields = ({ type }) => {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, type, onChange };
};
