"use client";

import { global_icons } from "@/icons";
import { usePathname } from "next/navigation";
import { BaseButton } from "../BaseButton";
import { useDarkMode } from "@/utilities/hooks/useDarkMode";
import { HeaderAvatar } from "./HeaderAvatar";
import { HeaderSearch } from "./HeaderSearch";

const { searchIcon, notificationIcon, modeIcon } = global_icons;

export function TheHeader() {
  const pathname = usePathname();
  const { handleDarkMode } = useDarkMode(); // Get handleDarkMode function from useDarkMode hook

  return (
    <header className="flex justify-end fixed top-0 left-0 w-full z-10 2xl:h-20 bg-white dark:bg-[#151D30] transition-all">
      <div className="py-5 px-16 2xl:py-6 2xl:px-20">
        <ul className="flex items-center gap-4 md:gap-6">
          {pathname !== "/" && (
            // Conditionally render search and notification icons if not on homepage
            <>
              <li>
                <HeaderSearch icon={searchIcon} />
              </li>
              <li>
                <BaseButton mode="icon">{notificationIcon}</BaseButton>
              </li>
            </>
          )}
          <li>
            <BaseButton mode="icon" clickEvent={handleDarkMode}>
              {modeIcon}
            </BaseButton>
          </li>
          <li className="h-10 flex items-center">
            <HeaderAvatar pathname={pathname} />
          </li>
        </ul>
      </div>
    </header>
  );
}
