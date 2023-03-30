// import React, { useState } from 'react';

// import './recipecard.css';



// const recipe = {
//     title: 'Spaghetti Bolognese',
//     description: 'A classic Italian dish that is easy to make and delicious.',
//     imageUrl: 'https://www.example.com/spaghetti-bolognese.jpg',
//     ingredients: ['1 pound spaghetti', '1 pound ground beef', '1 onion, chopped', '1 can diced tomatoes', '1 tablespoon tomato paste', '2 cloves garlic, minced', '1 teaspoon dried oregano', '1/2 teaspoon salt', '1/4 teaspoon black pepper', '2 tablespoons olive oil'],
//     instructions: ['Cook the spaghetti according to package instructions.', 'While the spaghetti is cooking, heat the olive oil in a large pan over medium heat.', 'Add the ground beef and cook until browned, stirring occasionally.', 'Add the onion and garlic to the pan and cook until softened, about 5 minutes.', 'Add the diced tomatoes, tomato paste, oregano, salt, and black pepper to the pan and stir well.', 'Reduce the heat to low and simmer the sauce for 10-15 minutes, stirring occasionally.', 'Serve the spaghetti with the bolognese sauce on top.'],
//   };





// const RecipeCard = ({ title, description, imageUrl }) => {
//   const [likes, setLikes] = useState(0);
//   const [savedLikes, setSavedLikes] = useState([]);

//   const handleLike = () => {
//     setLikes(likes + 1);
//     setSavedLikes([...savedLikes, title]);
//   };





//   return (


//     <div className="recipe-card">
//       <h2>{title}</h2>
//       <img src={imageUrl} alt={title} />
//       <p>{description}</p>
//       <div className="likes-container">
//         <button onClick={handleLike}>Like</button>
//         <span>{likes}</span>
//       </div>
//       <div className="saved-likes-container">
//         <h3>Saved Likes:</h3>
//         <ul>
//           {savedLikes.map((savedLike, index) => (
//             <li key={index}>{savedLike}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
import React, { useState } from "react";

function RecipeCard(props) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="recipe-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button onClick={handleLike}>{liked ? "Unsave" : "Save"}</button>
    </div>
  );
}

export default RecipeCard;
