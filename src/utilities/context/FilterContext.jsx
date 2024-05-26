"use client";

import { createContext, useState, useContext } from "react";

// Create a new context instance
const FilterContext = createContext();

// Return the provider component with the filters state and setter function
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState("");
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to access the filters context
export const useFilter = () => useContext(FilterContext);
