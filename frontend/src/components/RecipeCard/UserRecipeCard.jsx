import React, { useState } from "react";
import Axios from 'axios';

function UserRecipeCard() {
const [recipeName, setRecipeName] = useState("")
const [recipeDescription, setRecipeDescription] = useState("")
const [recipeIngredients, setRecipeIngredients] = useState("")
const [recipeInstructions, setRecipeInstructions] = useState("")

const getRecipe = () => {
    Axios.get('http://localhost:8080/api/recipes').then((response) => {

      setRecipeName(response.data[0].name);
      setRecipeDescription(response.data[0].description)
      setRecipeIngredients(response.data[0].ingredients)
      setRecipeInstructions(response.data[0].instructions)
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