import React, { useState, } from "react";
import Axios from 'axios';

function UserRecipeCard() {
const [recipeName, setRecipeName] = useState("")
const [recipeDescription, setRecipeDescription] = useState("")
const [recipeIngredients, setRecipeIngredients] = useState("")
const [recipeInstructions, setRecipeInstructions] = useState("")


const getRecipe = () => {
    Axios.get('http://localhost:8080/api/recipes').then((response) => {
      const randomNumber = Math.floor(Math.random() * 4);
      setRecipeName(response.data[randomNumber].name);
      setRecipeDescription(response.data[randomNumber].description)
      setRecipeIngredients(response.data[randomNumber].ingredients)
      setRecipeInstructions(response.data[randomNumber].instructions)
      console.log(response)


    })
  }

 return (

<div>
<button onClick={() => getRecipe()}  type="submit">Recipe</button>

<h1>{recipeName}</h1>
<h2>{recipeDescription}</h2>
<br />
<h3>Ingredients</h3>
<p>{recipeIngredients}</p>
<p>{recipeInstructions}</p>
{/* <p>{recipe.author}</p> */}

</div>

 );
}

export default UserRecipeCard;