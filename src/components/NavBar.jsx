 import React from "react";

function Navbar({ setShowFavorites }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-cursive text-2xl font-thin text-white">Recipe Vault</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setShowFavorites(false)}
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => setShowFavorites(true)}
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              Favorites
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

