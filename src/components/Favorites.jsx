import React from "react";
import RecipeTile from "./RecipeTile";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="font-semibold text-3xl mb-6 text-gray-800">Your Favorite Recipes</h2>
      {favorites.length > 0 ? (
        <div
          className={`flex ${
            favorites.length === 1 ? "justify-center" : "justify-center"
          } flex-wrap gap-8 w-full max-w-5xl`}
        >
          {favorites.map((recipe) => (
            <div
              className={`${
                favorites.length === 1
                  ? "w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
                  : "w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              } flex justify-center`}
              key={recipe.recipe.uri}
            >
              <RecipeTile
                recipe={recipe}
                toggleFavorite={toggleFavorite}
                isFavorite={true}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">You have no favorite recipes yet.</p>
      )}
    </div>
  );
}

export default Favorites;
