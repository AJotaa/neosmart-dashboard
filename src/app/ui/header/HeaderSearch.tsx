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
  const [showInput, setShowInput] = useState<boolean>(false);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const { filters, setFilters } = useFilter();
  useOutsideClick(inputRef, () => {
    setShowInput(false);
  });

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters(e.target.value);
  }

  const inputData = {
    type: "text",
    value: filters,
    ref: inputRef,
    onChange: handleFilter,
  };

  return (
    <div>
      {showInput ? (
        <BaseInput inputData={inputData} />
      ) : (
        <BaseButton mode="icon" clickEvent={() => setShowInput(true)}>
          {icon}
        </BaseButton>
      )}
    </div>
  );
}
