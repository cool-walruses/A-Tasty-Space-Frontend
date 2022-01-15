import React, { useContext, useState } from "react";
import { useRoute } from "wouter";

import UserContext from "../contexts/userContext";

import RecipeDisplay from "./recipe/recipeDisplay";
import RecipeError from "./recipe/recipeError";

function Recipe(props) {
  const user = useContext(UserContext);
  const [, params] = useRoute("/recipe/:id");
  let error = true;

  if (params) {
    error = false;
  }

  const getBodyContent = () => {
    if (error) {
      return <RecipeError />;
    } else {
      return <RecipeDisplay id={params.id} />
    }
  };

  return (
    <div id="recipe" className="page">
      {getBodyContent()}
    </div>
  );
}

export default Recipe;
