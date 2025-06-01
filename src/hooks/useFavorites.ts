import { useState, useEffect } from "react";

const FAVORITES_STORAGE_KEY = "ecommerce-favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (savedFavorites) {
        const favoritesArray = JSON.parse(savedFavorites) as number[];
        setFavorites(new Set(favoritesArray));
      }
    } catch (error) {
      console.error("Error loading favorites from localStorage:", error);
    }
  }, []);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      const favoritesArray = Array.from(newFavorites);
      localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favoritesArray)
      );
      return newFavorites;
    });
  };

  const clearFavorites = () => {
    localStorage.removeItem(FAVORITES_STORAGE_KEY);
    setFavorites(new Set());
  };

  const isFavorite = (productId: number): boolean => {
    return favorites.has(productId);
  };

  return {
    favorites,
    toggleFavorite,
    clearFavorites,
    isFavorite,
    favoritesCount: favorites.size,
  };
};
