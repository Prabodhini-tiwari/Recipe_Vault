import React from "react";

function Pagination({ currentPage, recipesPerPage, totalRecipes, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8 space-x-2">
      <button
        className={`p-2   ${currentPage === 1 ? "text-gray-400" : "text-blue-500"} cursor-pointer`}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`p-2 ${currentPage === number ? "text-blue-500 font-bold" : "text-gray-500"} cursor-pointer`}
        >
          {number}
        </button>
      ))}

      <button
        className={`p-2   ${currentPage === pageNumbers.length ? "text-gray-400" : "text-blue-500"} cursor-pointer`}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
