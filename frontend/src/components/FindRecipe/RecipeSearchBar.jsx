import React, { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import './findrecipe.css';
import Axios from 'axios';


function RecipeSearchBar() {
  const [query, setQuery] = useState('');
  const [joke, setJoke] = useState("")
  const [meal, setMeal] = useState([""])

  
  const [recipes, setRecipes] = useState([
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
      directions: '1. Cook spaghetti according to package directions. 2. Brown ground beef in a large skillet over medium-high heat. 3. Add onion and garlic and cook until softened. 4. Add tomato sauce and simmer for 10 minutes. 5. Serve over spaghetti.',
      img: 'https://www.aheadofthyme.com/wp-content/uploads/2020/12/spaghetti-bolognese-4.jpg'
    },
    {
      name: 'Grilled Cheese Sandwich',
      ingredients: ['bread', 'cheddar cheese', 'butter'],
      directions: '1. Butter one side of each slice of bread. 2. Place cheese between slices of bread, with buttered sides facing out. 3. Cook in a skillet over medium heat until bread is toasted and cheese is melted, about 2-3 minutes per side.',
      img: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg'
    },
    {
      name: 'Chocolate Chip Cookies',
      ingredients: ['flour', 'butter', 'sugar', 'brown sugar', 'eggs', 'vanilla extract', 'baking soda', 'salt', 'chocolate chips'],
      directions: '1. Preheat oven to 375 degrees F. 2. Cream butter and sugars in a large bowl until light and fluffy. 3. Beat in eggs and vanilla. 4. In a separate bowl, combine flour, baking soda, and salt. 5. Gradually add flour mixture to butter mixture and mix well. 6. Stir in chocolate chips. 7. Drop by rounded tablespoonfuls onto ungreased baking sheets. 8. Bake for 8-10 minutes or until lightly browned. 9. Cool on wire racks.',
      img: 'https://thebananadiaries.com/wp-content/uploads/2022/10/vegan-chocolate-chip-cookies_3014.jpg'
    },
    {
      name: 'Chicken Pot Pie',
      ingredients: ['hi,bye'],
      directions: '1.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2r3xCCV2BWI3VriIbnkBJ05uVhEE18iQJ_Q&usqp=CAU'
        

    },




  ]);

  

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [count, setCount] = useState(0);

  const getJoke = () => {

    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      setJoke(response.data.setup + " . . . " + response.data.punchline)
    })
  }

  const getMeal = () => {

    Axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((response) => {
      setMeal(response.data.meals.strMeal)
      console.log(response)

    })

  }




  function handleCount(){
    setCount(count + 1);
  }



  const handleChange = (event) => {
    setQuery(event.target.value);
    setSelectedRecipe(null); // Reset the selected recipe when the query changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const matchingRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );

    if (matchingRecipes.length > 0) {
      setSelectedRecipe(matchingRecipes[0]);
    } else {
      setSelectedRecipe(null);
    }
  };

  return (
    <div className="Sub">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="find a recipe..." value={query} onChange={handleChange} />
        <button onClick={ () => getMeal() } id='recipes' type="submit">GO</button>
      </form>
      {selectedRecipe && (
        <grid>
        <div>
          <h2>{selectedRecipe.name} {meal}</h2>
          <p>Ingredients: {selectedRecipe.ingredients.join(', ')}</p>
          <p>Directions: {selectedRecipe.directions}</p>
          <img id='foodimg' src={selectedRecipe.img} alt="" />
          <p id='like'> Likes: {count} <button id='heartbutton' onClick={handleCount}><AiOutlineHeart /></button> </p>
        </div>
          
        </grid>
      )}

    </div>
    
  );
  
}

export default RecipeSearchBar;