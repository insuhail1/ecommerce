export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
}

export type SortOption = "name" | "price-asc" | "price-desc" | "rating";
export type ViewMode = "grid" | "list";

export interface FilterState {
  category: string;
  rating: number;
  sortBy: SortOption;
}
