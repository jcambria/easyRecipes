import React from "react";

function AddRecipeButton({ handleAddRecipeClick }) {
  const handleClick = () => {
    handleAddRecipeClick();
  };
  return (


      <span onClick={handleClick} className="loginicon">
          Add Recipe
        </span>


  );
}

export default AddRecipeButton;