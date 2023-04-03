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
      {/* <button onClick={handleLike}>{liked ? "Unsave" : "Save"}</button> */}
    </div>
  );
}

export default RecipeCard;
