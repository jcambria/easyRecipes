import React, { useState } from 'react';
import addrecipeform from './addrecipeform.css';

function RecipeForm() {
    const [userName, setUserName] = useState('');
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeImage, setRecipeImage] = useState('');
    const [recipeDescription, setRecipeDescription] = useState([]);

    const handleRecipeChange = (event, index) => {
        const newUserRecipe = [...recipeDescription];
        newUserRecipe[index] = event.target.value;
        setRecipeDescription(newUserRecipe);
    }

    const handleAddRecipe = () => {
        setRecipeDescription([...recipeDescription, '']);
    }

    const handleRemoveRecipe = (index) => {
        const newUserRecipe = [...recipeDescription];
        newUserRecipe.splice(index, 1);
        setRecipeDescription(newUserRecipe);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Connect to React Server and merge with registered user
//         try {
//               let res = fetch("http://localhost:8080/api/users/{user_id}/recipe", {
//                 method: "POST",
//                 headers: { 'Content-Type': 'application/json'},
//                 body: JSON.stringify({
//                     userName:userName,
//                     recipeTitle: recipeTitle,
//                     recipeImage: recipeImage,
//                     recipeDescription: recipeDescription,
//               }),
//         });
//               let resJson = res.json();
//               if (res.status === 200) {
//                 setUserName("");
//                 setRecipeTitle("");
//                 setRecipeImage("");
//                 setRecipeDescription("");
//                 setMessage("Recipe Submitted Successfully!");
//                 setIsShowRegister(!isShowRegister);
//                 setIsShowLogin(!isShowLogin);
//               } else {
//                 setMessage("Some error occurred");
//               }
//             } catch (err) {
//               console.log(err);
//             }
//           };
    }

     <h2 id='RecipeTitle'> Share Your Recipe </h2>
    return (

        <form onSubmit={handleSubmit}>
            <label>
            <h4>Share Your Recipe</h4>
            <br />
                Username:
                <br />
                <input class="use_input" type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            </label>
            <br />
            <label>
                Recipe Title:
                <br />
                <input type="text" value={recipeTitle} onChange={(event) => setRecipeTitle(event.target.value)} />
            </label>
            <br />
            <label>
                Recipe Image:
                <br />
                <br />
                <input type="file" accept="image/*" onChange={(event) => setRecipeImage(event.target.files[0])} />
            </label>
            <br />
            <label>
                Recipe Description:
                <br />
                {recipeDescription.map((newUserRecipe, index) => (
                    <div key={index}>
                        {index + 1}. <input type="text" value={newUserRecipe} onChange={(event) => handleRecipeChange(event, index)} />
                        <button
                        type="button" onClick={() => handleRemoveRecipe(index)}>Remove Recipe</button>
                    </div>
                ))}
                <br />
                <button type="button" onClick={handleAddRecipe}>Add Another Recipe</button>
            </label>
            <br />
            <button
            type="submit">Submit</button>
        </form>
    );
}

export default RecipeForm;