import React from "react";
import type { Product, ViewMode } from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  favorites: Set<number>;
  onToggleFavorite: (productId: number) => void;
  viewMode: ViewMode;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  favorites,
  onToggleFavorite,
  viewMode,
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No products found
        </h3>
        <p className="text-gray-500">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "grid-cols-1 max-w-4xl mx-auto"
      }`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.has(product.id)}
          onToggleFavorite={onToggleFavorite}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
