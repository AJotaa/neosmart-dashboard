"use client";

import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if the clicked element is outside the referenced element or if is render
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    };

    // Use setTimeout to defer adding the event listener until after the current event loop tick
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", listener);
    }, 0);

    // Cleanup function to remove the event listener
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, callback]); // Depend on the ref and callback function
};
