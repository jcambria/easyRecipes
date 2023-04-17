import React, { useState, useEffect } from "react";
import UserRecipeCard from "./UserRecipeCard";

export default function RecipesList() {
    const [recipes, setRecipes] = useState([])
    const [recipeCard, setRecipeCard] = useState("")
    const [author, setAuthor] = useState("")
    const [isShowRecipeCard, setIsShowRecipeCard] =useState(false)

    useEffect(() => {
        const periodicallyFetch = setTimeout(
           () => fetch("http://localhost:8080/api/recipes")
                      .then(res => res.json())
                      .then(response => setRecipes(response)),
           1000);
        return () => clearInterval(periodicallyFetch)
    }, [])

    function handleRecipeClick(recipe) {
        setRecipeCard(recipe)
        setAuthor(recipe.author)
        setIsShowRecipeCard(true)
      };


return (
<>
    <div className="flex flex-col justify-center w-full h-16 mt-32">
        <h1 className="text-gray-400 text-4xl font-bold text-center mb-2">Dad's Recipes</h1>
        <div className="flex w-full md:w-1/4 bg-black-200 self-center mb-12 h-32">
            <div className="w-full m-2 overflow-auto">
                <ul className=" list-none">
                    <div>
                    {recipes.map(recipe => (
                            <li>
                                <button className="m-0" onClick={() => handleRecipeClick(recipe)}>
                                    {recipe.name}
                                </button>
                            </li>
                        )
                    )}    
                    </div>
                </ul>
            </div>

        </div> 
    </div>
      <UserRecipeCard recipeCard={recipeCard}
      isShowRecipeCard={isShowRecipeCard}
      author={author}/>
      </>
);
}
