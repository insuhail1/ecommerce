import { Heart, Trash2 } from "lucide-react";
import React from "react";

interface HeaderProps {
  favoritesCount: number;
  onClearFavorites?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  favoritesCount,
  onClearFavorites,
}) => {
  return (
    <div className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black">Premium Store</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-sm text-gray-600">
                {favoritesCount} favorites
              </span>
            </div>
            {favoritesCount > 0 && onClearFavorites && (
              <button
                onClick={onClearFavorites}
                className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
                title="Clear all favorites"
              >
                <Trash2 className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
