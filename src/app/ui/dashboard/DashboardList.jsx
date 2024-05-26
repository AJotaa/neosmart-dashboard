"use client";

import { useState, useEffect } from "react";
import { useFilter } from "@/utilities/context/FilterContext";
import { BaseCard } from "../dashboard/BaseCard";

export function DashboardList({ data = [] }) {
  // State to hold the filtered data based on search filters
  const [filteredData, setFilteredData] = useState(data);
  const { filters } = useFilter(); // Access the search filter from the context

  useEffect(() => {
    if (filters) {
      // If there are search filters applied
      const filtered = data?.filter((e) => {
        const lowerName = e.name.toLowerCase();
        const lowerFilters = filters.toLowerCase();
        return lowerName.includes(lowerFilters); // Check if item name includes filter value
      });
      setFilteredData(filtered); // set filtered data based on search filters
    } else {
      setFilteredData(data); // else set filtered data to original data if no filters applied
    }
  }, [filters]); // re-run effect when filters change

  return (
    <>
      {filteredData && filteredData.length > 0 ? (
        <ul className="max-w-[1200px] mx-auto grid gap-6 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:my-28 2xl:gap-8">
          {filteredData &&
            filteredData.map((e) => <BaseCard data={e} key={e.id} />)}
        </ul>
      ) : (
        // If no data matches the filter, display a message
        <div className="text-center text-2xl mt-20">
          <p>There are no categories to show...</p>
        </div>
      )}
    </>
  );
}
