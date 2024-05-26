"use client";

import { useState, useRef, useEffect } from "react";
import { useFilter } from "@/utilities/context/FilterContext";
import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import { BaseButton } from "../BaseButton";
import { BaseInput } from "../BaseInput";

interface HeaderSearchProps {
  icon: React.ReactNode;
}

export function HeaderSearch({ icon }: HeaderSearchProps) {
  // State for controlling input visibility
  const [showInput, setShowInput] = useState<boolean>(false);
  const inputRef = useRef<null | HTMLInputElement>(null);
  // Destructure filters and setFilters from useFilter context
  const { filters, setFilters } = useFilter();

  // Custom hook to handle outside click event on input
  useOutsideClick(inputRef, () => {
    setShowInput(false); // Close input when clicking outside
  });

  // Effect to focus input when shown
  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters(e.target.value); // Update filters based on input value
  }

  const inputData: React.InputHTMLAttributes<HTMLInputElement> = {
    type: "text",
    value: filters,
    onChange: handleFilter,
  };

  return (
    <div>
      {showInput ? (
        <BaseInput inputData={inputData} ref={inputRef} />
      ) : (
        <BaseButton mode="icon" clickEvent={() => setShowInput(true)}>
          {icon}
        </BaseButton>
      )}
    </div>
  );
}
