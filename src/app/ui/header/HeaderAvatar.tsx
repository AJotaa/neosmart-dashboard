"use client";

import Image from "next/image";
import { BaseButton } from "../BaseButton";

interface HeaderAvatarProps {
  pathname: string;
}

export function HeaderAvatar({ pathname }: HeaderAvatarProps) {
  // Conditional rendering based on pathname
  return (
    <>
      {pathname === "/" ? (
        <BaseButton link="dashboard">Get Started</BaseButton>
      ) : (
        <Image alt="avatar" src="/avatar.png" width={40} height={40} />
      )}
    </>
  );
}
