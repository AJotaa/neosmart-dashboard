"use client";

import { useState } from "react";
import { global_icons } from "@/icons";

const { arrowIcon, componentIcon } = global_icons;

interface BaseDropdowmProps {
  title: string;
  children: React.ReactNode;
}

export function BaseDropdown({ title = "", children }: BaseDropdowmProps) {
  const [showContent, setShowContent] = useState(false);

  function handleShow() {
    setShowContent((prev) => !prev);
  }

  return (
    <div className="bg-gray-200 flex p-2 rounded-lg dark:bg-slate-700 transition-all">
      <span className="basis-8 p-1 h-8">{componentIcon}</span>
      <div className="w-full">
        <div
          onClick={handleShow}
          className="flex justify-between items-center w-full text-sm cursor-pointer p-1 hover:text-[#C21BCC]"
        >
          <span className="">{title}</span>
          <span
            className="transition-all block"
            style={{ transform: showContent ? "rotate(-180deg)" : "" }}
          >
            {arrowIcon}
          </span>
        </div>
        {showContent && <div className="mt-2 p-1">{children}</div>}
      </div>
    </div>
  );
}
