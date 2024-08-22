import React from "react";
import Axios from "axios";
import { useState } from "react";
import Spinner from "./components/Spinner";

import Navbar from "./components/NavBar";
import RecipeTile from "./components/RecipeTile";
import Footer from "./components/Footer";

 
 
 
 

function App() {

   

  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const [loading, setLoading] = useState(false);  // For tracking loading state
  const [error, setError] = useState(null);  // For tracking errors

  const YOUR_APP_ID = `184c1341`;
  const YOUR_APP_KEY = "67b63668da095685d2e909987146809f";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;


  const getRecipeInfo = async () => {
    setLoading(true);
    setError(null); // Reset any previous errors

    try{
    const result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);

    } catch (err){
      setError("Error fetching recipes. Please try again.");
      console.error("Error fetching recipes:", err);

    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    if(query){
      getRecipeInfo();    // Fetch the recipes only if query is not empty
    }
  };

  return (
  
      <div className="bg-gradient-to-r from-green-100 to to-blue-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col justify-center items-center p-6 flex-grow  mt-16">
          <h1  className = " font-cursive font-semibold text-5xl text-gray-900 mt-8 mb-4 text-center ">Recipe Vault 🥘 </h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
            Discover new and exciting recipes by searching for your favorite ingredients.
          </p>

          <form className="flex text-center flex-col items-center " onSubmit={onSubmit}>
            
            <input className="text-center p-3 px-4 w-full max-w-lg border-2 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              
              type="text" 
              placeholder="Enter Recipe"
              autoComplete="off"
              value = {query}
              onChange = {(e)=> setQuery(e.target.value)}
            />

            <input 
              className="p-3 px-4 text-base bg-blue-500 boredr-2 border-blue-500 rounded-xl text-white cursor-pointer hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300 "
              type="submit" 
              value="Search"
            />
          </form>

          {loading && (<div className="mt-6"><Spinner /> </div>)}  {/* Show loading message */}
          {error && <p className="mt-4 text-red-500">{error}</p>}  {/* Show error message */}

          

          {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recipes.length > 0 &&
              recipes.map((recipe) => {
              return <RecipeTile  key = {recipe.recipe.uri}recipe={recipe} />;
            })}
          </div> */}

          <div className="mt-10 flex flex-wrap gap-8 justify-center w-full max-w-5xl">
            {recipes.length > 0 &&
              recipes.map((recipe) => (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
                  <RecipeTile key={recipe.recipe.uri} recipe={recipe} />
                </div>
              ))}
          </div>
          
        </div>
        <Footer />
      </div>

      
    
  )
}

 
 
export default App
//min-w-[200px]