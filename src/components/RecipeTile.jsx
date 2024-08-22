import React from "react";
import { v4 as uuidv4 } from "uuid";

function RecipeTile({recipe}){
    return(
        // <div className="flex flex-col justify-center items-center cursor-pointer"
        // onClick={() => window.open(recipe["recipe"]["url"])}
        // >

        // <img className= "h-48 w-48 object-cover rounded" src={recipe["recipe"]["image"]} alt="" />
        //     <p className="max-w-xs text-center my-3" >{recipe["recipe"]["label"]}</p>
        // </div>

        // <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        //     <img
        //         className="w-full h-48 object-cover"
        //         src={recipe.recipe.image}
        //         alt={recipe.recipe.label}
        //     />
        //     <div className="p-4">
        //         <h3 className="text-xl font-semibold text-gray-800">{recipe.recipe.label}</h3>
        //         <a
        //         className="text-blue-500 text-sm mt-2 inline-block"
        //         href={recipe.recipe.url}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         >
        //         View Recipe
        //         </a>
        //     </div>
        // </div>


        <div className=" overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-white max-w-xs w-full h-full">
            <img
                className="w-full h-40 object-cover rounded-t-lg"
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{recipe.recipe.label}</h3>
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

export default RecipeTile