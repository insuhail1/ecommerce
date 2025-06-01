import { useMemo } from "react";
import type { Product, FilterState } from "../types/Product";

export const useProductFilters = (
  products: Product[],
  filters: FilterState
) => {
  return useMemo(() => {
    let filtered = products.filter((product) => {
      const categoryMatch =
        filters.category === "All" || product.category === filters.category;
      const ratingMatch = product.rating >= filters.rating;
      return categoryMatch && ratingMatch;
    });

    return filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [products, filters]);
};
