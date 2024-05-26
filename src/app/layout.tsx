import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { TheHeader } from "./ui/header/TheHeader";
import { TheFooter } from "./ui/footer/TheFooter";
import { FilterProvider } from "../utilities/context/FilterContext"; // Import context provider for filtering

const openSans = Open_Sans({ subsets: ["latin"] });

// Define metada for the page
export const metadata: Metadata = {
  title: "NeoSmart Promps",
  description: "Created with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${openSans.className} bg-gray-300 text-[#353E58] dark:bg-[#2C3445] dark:text-white transition-all`}
      >
        {/* FilterProvider wraps app to provide searchbar context */}
        <FilterProvider>
          <TheHeader />
          {children}
          <TheFooter />
        </FilterProvider>
      </body>
    </html>
  );
}
