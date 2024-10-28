 
 
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./components/NavBar";
import RecipeTile from "./components/RecipeTile";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import Favorites from "./components/Favorites"; // Import the Favorites component

 

const commonIngredients = [
    "paneer", "banana", "cake", "chicken", "cheese", "egg",
    "spinach", "milk", "chocolate", "butter", "curd", "oil",
   "salt", "potato", "tomato", "pizza", "burger", "pepper",
    "apple", "grapes", "coconut", "sugar", "garlic", "onion"
  ];

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  
  const recipesPerPage = 3;
  const YOUR_APP_ID = `184c1341`;
  const YOUR_APP_KEY = "67b63668da095685d2e909987146809f";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    setLoading(true);
    try {
      const result = await Axios.get(url);
      setRecipes(result.data.hits);
      setCurrentPage(1);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query) getRecipeInfo();
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      const matchingSuggestions = commonIngredients.filter((ingredient) =>
        ingredient.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(matchingSuggestions);
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  const handleSuggestionClick = (ingredient) => {
    setQuery(ingredient);
    setSuggestions([]);
  };

  useEffect(() => {
    const clearSuggestionsTimer = setTimeout(() => {
      setSuggestions([]);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(clearSuggestionsTimer); // Cleanup timer on unmount
  }, [query]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    if (favorites.some((fav) => fav.recipe.uri === recipe.recipe.uri)) {
      setFavorites(favorites.filter((fav) => fav.recipe.uri !== recipe.recipe.uri));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to to-blue-100 min-h-screen flex flex-col">
      <Navbar setShowFavorites={setShowFavorites} />
      <div className="flex flex-col justify-center items-center p-6 flex-grow mt-16">
        <h1 className="font-cursive font-semibold text-5xl text-gray-900 mt-8 mb-4 text-center">Recipe Vault 🥘</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
          Discover new and exciting recipes by searching for your favorite ingredients.
        </p>

        {showFavorites ? (
          // Favorites View
          <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
        ) : (
          // Home (Recipe Search) View
          <>
            <form className="flex text-center flex-col items-center" onSubmit={onSubmit}>
              <input
                className="text-center p-3 border-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                type="text"
                placeholder="Enter Ingredient"
                autoComplete="off"
                value={query}
                onChange={handleInputChange}
              />

              {suggestions.length > 0 && (
                <div className="suggestions-inline text-gray-600 mt-1">
                  {suggestions.map((ingredient, index) => (
                    <span
                      key={index}
                      onClick={() => handleSuggestionClick(ingredient)}
                      className="cursor-pointer px-1 hover:underline"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              )}

              <input
                className="p-3 px-4 text-base bg-blue-500 border-2 border-blue-500 rounded-xl text-white cursor-pointer hover:bg-blue-600 transition-colors duration-300"
                type="submit"
                value="Search"
              />
            </form>

            {loading && <div className="mt-6">Loading...</div>}

            <div className="mt-10 flex flex-wrap gap-8 justify-center w-full max-w-5xl">
              {currentRecipes.map((recipe) => (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center" key={recipe.recipe.uri}>
                  <RecipeTile
                    recipe={recipe}
                    toggleFavorite={() => toggleFavorite(recipe)}
                    isFavorite={favorites.some((fav) => fav.recipe.uri === recipe.recipe.uri)}
                  />
                </div>
              ))}
            </div>

            {recipes.length > 0 && (
              <Pagination
                currentPage={currentPage}
                recipesPerPage={recipesPerPage}
                totalRecipes={recipes.length}
                paginate={paginate}
              />
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
