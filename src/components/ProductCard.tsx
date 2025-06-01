import React from "react";
import { Heart } from "lucide-react";
import type { Product } from "../types/Product";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
  viewMode?: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  viewMode = "grid",
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  if (viewMode === "list") {
    return (
      <div
        className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex ${
          isFavorite ? "ring-2 ring-red-500" : ""
        }`}
      >
        <div className="relative overflow-hidden w-48 h-48 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
              isFavorite
                ? "bg-red-500 text-white shadow-lg"
                : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
          <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              {product.name}
            </h3>
            <StarRating rating={product.rating} />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
        isFavorite ? "ring-2 ring-red-500" : ""
      }`}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? "bg-red-500 text-white shadow-lg"
              : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} />

        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
