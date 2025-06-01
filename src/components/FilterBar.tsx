import React from "react";
import { Filter, ArrowUpDown, Grid, List } from "lucide-react";
import type { SortOption, ViewMode, FilterState } from "../types/Product";

interface FilterBarProps {
  categories: string[];
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  productCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  filters,
  onFilterChange,
  viewMode,
  onViewModeChange,
  productCount,
}) => {
  return (
    <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-700">Filters:</span>
          </div>

          <select
            value={filters.category}
            onChange={(e) => onFilterChange({ category: e.target.value })}
            className="px-4 py-2 border border-gray-300 text-black rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={filters.rating}
            onChange={(e) => onFilterChange({ rating: Number(e.target.value) })}
            className="px-4 py-2 border border-gray-300 text-black rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value={0}>All Ratings</option>
            <option value={4}>4+ Stars</option>
            <option value={4.5}>4.5+ Stars</option>
          </select>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-600" />
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({ sortBy: e.target.value as SortOption })
              }
              className="px-4 py-2 border border-gray-300 text-black rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="name">Sort by Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="flex bg-gray-100 rounded-lg p-1 ml-auto">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded transition-all ${
                viewMode === "grid" ? "bg-gray-300 shadow-sm" : ""
              }`}
              title="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded transition-all ${
                viewMode === "list" ? "bg-gray-300 shadow-sm" : ""
              }`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <span className="text-sm text-gray-600">
            {productCount} products found
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
