import React from "react";

function RecipeTile({ recipe, toggleFavorite, isFavorite }) {
  return (
    <div className=" overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-white max-w-xs w-full h-full">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={recipe.recipe.image}
        alt={recipe.recipe.label}
      />
      <div className="p-4 flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-semibold text-gray-800">{recipe.recipe.label}</h3>
          <button onClick={() => toggleFavorite(recipe)} className="ml-2">
            {isFavorite ? "💖" : "🤍"}
          </button>
        </div>
        
        <a
          className="text-blue-500 text-xs mt-1 inline-block hover:underline"
          href={recipe.recipe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Recipe
        </a>

        <div className="mt-1 text-gray-600 text-xs">
          <p>Cuisine: {recipe.recipe.cuisineType?.join(", ")}</p>
          <p>Calories: {Math.round(recipe.recipe.calories)}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeTile;
