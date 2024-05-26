"use client";

import { useState } from "react";
import { BaseButton } from "../BaseButton";
import { SidebarDropdown } from "./SidebarDropdown";
import { global_icons } from "@/icons";

const { arrowIcon } = global_icons;

const dropDownData = [
  {
    title: "Promps",
    options: [
      { name: "Legal", link: "" },
      { name: "People", link: "" },
      { name: "Marketing", link: "" },
      { name: "Finance", link: "" },
    ],
  },
  {
    title: "My profile",
    options: [
      { name: "My prompts", link: "" },
      { name: "Saved", link: "" },
      { name: "Settings", link: "" },
      { name: "Share with friends", link: "" },
    ],
  },
];

const extraLinks = [
  {
    title: "Academy",
    icon: "academyIcon",
    link: "",
  },
  {
    title: "FAQs",
    icon: "faqIcon",
    link: "",
  },
];

export function Sidebar() {
  const [show, setShow] = useState(false);

  const isShow = show ? "translate-x-0" : "-translate-x-full";

  function handleShow() {
    setShow((prev) => !prev);
  }

  const arrowDirection = !show ? "rotate-[270deg]" : "rotate-90";

  return (
    <>
      <div
        className={`${isShow} fixed z-20 lg:z-0 lg:relative lg:translate-x-0 min-h-screen top-0 bottom-0 bg-white pt-16 text-left px-6 dark:bg-[#151D30] lg:px-8 2xl:px-10 transition-all`}
      >
        <nav className="flex flex-col gap-10 mt-14 w-40 lg:w-44 2xl:gap-16">
          {dropDownData.map((e) => (
            <SidebarDropdown data={e} key={e.title} />
          ))}
          {extraLinks.map((e) => (
            <span className="flex items-center" key={e.title}>
              <span className="p-1">{global_icons[e.icon]}</span>
              <BaseButton mode="flat">{e.title}</BaseButton>
            </span>
          ))}
        </nav>
        <div
          className={`${arrowDirection} transition-all duration-500 lg:hidden right-[-20%] absolute top-0 h-20 flex items-center justify-center`}
        >
          <BaseButton clickEvent={handleShow} mode="icon">
            {arrowIcon}
          </BaseButton>
        </div>
      </div>
      {show && (
        <div
          className="fixed h-screen w-screen top-0 left-0 z-10 bg-black opacity-40 lg:hidden"
          onClick={() => setShow(false)}
        ></div>
      )}
    </>
  );
}
