import { useState } from 'react';

export const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return {
    filters,
    updateFilters,
    resetFilters,
  };
};
