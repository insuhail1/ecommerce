import { useMemo } from "react";
import type { Product } from "../types/Product";

export const usePagination = (
  products: Product[],
  currentPage: number,
  itemsPerPage: number
) => {
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  }, [products, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return { paginatedProducts, totalPages };
};
