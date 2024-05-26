"use client";

import { useState } from "react";
import { global_icons } from "@/icons";

const { checkboxIcon } = global_icons;

interface BaseCheckboxProps {
  label?: string;
  id?: string;
  inputData?: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export const BaseCheckbox = ({ label, id, inputData }: BaseCheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const bgBaseClr = "bg-gray-300 dark:bg-white ring-transparent";

  // Background color based on checkbox status
  const bgColor = !checked ? bgBaseClr : "bg-[#FF901F]";

  function handleCheckbox() {
    setChecked(!checked);
  }

  return (
    <label
      htmlFor={id}
      className="group flex items-center gap-3 relative cursor-pointer"
      onChange={handleCheckbox}
    >
      {/* Render checkbox input readonly */}
      <input
        type="checkbox"
        id={id}
        name={id}
        className="abosolute contents w-0 h-0"
        checked={checked}
        readOnly
        onChange={inputData?.onChange}
      />
      {/* Render checkbox indicator */}
      <span
        className={`${bgColor} flex items-center justify-center ring-1 min-w-5 aspect-square rounded-sm text-white group-hover:ring-amber-600`}
      >
        {checked && <span>{checkboxIcon}</span>}
      </span>
      <span>{label}</span>
    </label>
  );
};
