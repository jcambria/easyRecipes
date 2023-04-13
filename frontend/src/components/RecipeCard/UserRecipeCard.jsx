import React from "react";
import "./recipecard.css";

function UserRecipeCard( {recipeCard, isShowRecipeCard, author}) {


  return (

    <div className={`${isShowRecipeCard ? "" : "hidden"}`}>
      <div className="flex justify-center w-full mt-20">
        <div className="flex bg-white w-2/3 border-indigo-600 self-center h-96 overflow-y-auto rounded-md">
          <div className="flex flex-col w-full">
            <div className="flex justify-center border-2 border-b-red-500 py-2">
                  <div></div>
                  <div className="font-bold">
                    <span>{recipeCard.name}</span>  
                  </div>
                  <div className="ml-4">
                    <span>by {author.userName}</span>
                  </div>
            </div>
            <div className="flex flex-col max-h-full">
                  <div className="border-2 border-b-blue-200 px-4">
                    <p className="m-0 "> <span className="font-bold underline decoration-1">Description:</span> {recipeCard.description}</p>
                  </div>
                  <div className="border-2 border-b-blue-200 px-4">
                    <p className="m-0"><span className="font-bold underline decoration-1">Ingredients:</span> {recipeCard.ingredients}</p>
                  </div>
                  <div className="border-2 border-b-blue-200 px-4">
                    <p className="m-0"><span className="font-bold underline decoration-1">Instructions:</span> {recipeCard.instructions}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRecipeCard;