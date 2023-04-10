import React, { useState } from 'react';


function RecipeForm({ isShowRecipeForm, setIsShowRecipeForm,
                       user}) {

    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeDescription, setRecipeDescription] = useState([]);
    const [recipeInstructions, setRecipeInstructions] = useState([]);
    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const [message, setMessage] = useState("");

    const handleRecipeChange = (event, index) => {
        const newUserRecipe = [...recipeDescription];
        newUserRecipe[index] = event.target.value;
        setRecipeDescription(newUserRecipe);
    }

    const handleAddRecipe = () => {
        setRecipeDescription([...recipeDescription, '']);
    }

let handleSubmit = async (e) => { console.log(user.id)
    e.preventDefault();

    try {
      let res = await fetch(`http://localhost:8080/api/users/${user.id}/recipe`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: recipeTitle,
          description: recipeDescription,
          ingredients: recipeIngredients,
          instructions: recipeInstructions,
        }),
      });

            if (res.status === 200) {
              setRecipeTitle("");
              setRecipeDescription("");
              setRecipeIngredients("");
              setRecipeInstructions("");
              setIsShowRecipeForm(!isShowRecipeForm);

            } else {
              setMessage("Error occurred");
            }
          } catch (err) {
            console.log(err);
          }
        };

     <h2 id='RecipeTitle'> Share Your Recipe </h2>

 return (
      <div className={`${isShowRecipeForm ? "active" : ""} show`}>
        <div className="login-form">
            <div className="form-box solid">
                <form onSubmit={handleSubmit}>
                    <h1 className="login-text">Add Recipe</h1>
                    <label>Recipe Title</label>
                    <input type="text" name="Recipe Title" className="login-box text-white"
                        placeholder='Recipe Title'
                        onChange={(e) => setRecipeTitle(e.target.value)}/>
                    <br></br>
                    <label>Recipe Description</label>
                    <input type="text" name="Recipe Description" className="login-box text-white"
                        placeholder='Recipe Description'
                        onChange={(e) => setRecipeDescription(e.target.value)}/>
                    <br></br>
                    <label>Recipe Ingredients</label>
                    <input type="text" name="Recipe Ingredients" className="login-box text-white"
                        placeholder='Recipe Ingredients'
                        onChange={(e) => setRecipeIngredients(e.target.value)}/>
                    <br></br>
                    <label>Recipe Instructions</label>
                    <input type="text" name="Recipe Instructions" className="login-box text-white"
                        placeholder='Recipe Instructions'
                        onChange={(e) => setRecipeInstructions(e.target.value)}/>
                    <br></br>
                    <input type="submit"value="Submit Recipe" className="login-btn" />
                <div className="message text-white">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
        </div>
      </div>
    );
};

export default RecipeForm;