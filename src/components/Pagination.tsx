import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300 text-black rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded-lg transition-all ${
            currentPage === i + 1
              ? "bg-gradient-to-r from-blue-600  to-purple-600 text-white shadow-lg"
              : "border border-gray-300 text-black  hover:bg-gray-50"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300 text-black rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
