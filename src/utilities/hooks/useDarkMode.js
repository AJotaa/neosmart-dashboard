import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // cheks the local storage value
    if (typeof window !== "undefined") {
      const darkMode = localStorage.getItem("darkMode");
      return darkMode === "true";
    }
    return true; // default value before localStorage is checked
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  // handler of the mode toggler
  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, handleDarkMode };
};
