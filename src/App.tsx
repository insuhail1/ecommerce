import React, { useState, useEffect } from "react";
import { mockProducts } from "./data/mockProducts";
import type { FilterState, ViewMode } from "./types/Product";
import { useProductFilters } from "./hooks/useProductFilters";
import { usePagination } from "./hooks/usePagination";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import { useFavorites } from "./hooks/useFavorites";

const App: React.FC = () => {
  const [products] = useState(mockProducts);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    category: "All",
    rating: 0,
    sortBy: "name",
  });

  const { favorites, toggleFavorite, clearFavorites, favoritesCount } =
    useFavorites();

  const itemsPerPage = 8;
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useProductFilters(products, filters);
  const { paginatedProducts, totalPages } = usePagination(
    filteredProducts,
    currentPage,
    itemsPerPage
  );

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleClearFavorites = () => {
    if (window.confirm("Are you sure you want to clear all favorites?")) {
      clearFavorites();
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header
        favoritesCount={favoritesCount}
        onClearFavorites={handleClearFavorites}
      />

      <FilterBar
        categories={categories}
        filters={filters}
        onFilterChange={handleFilterChange}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        productCount={filteredProducts.length}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductGrid
          products={paginatedProducts}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          viewMode={viewMode}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default App;
