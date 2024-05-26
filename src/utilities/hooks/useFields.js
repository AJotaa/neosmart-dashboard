"use client";

import { useState } from "react";

export const useFields = ({ type }) => {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  // Return an object containing the field value, type, and onChange handler
  return { value, type, onChange };
};
