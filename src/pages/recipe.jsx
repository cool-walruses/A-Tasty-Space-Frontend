import React, { useContext, useState } from "react";
import { useRoute, Redirect } from "wouter";

import UserContext from "../contexts/userContext";

import RecipeDisplay from "./recipe/recipeDisplay";
import RecipeError from "./recipe/recipeError";

import "./recipe/styles.sass";

function Recipe(props) {
  const sampleRecipe = {
    name: "Oven Toast",
    time: 0,
    difficulty: 0,
    description: "Who said you can't make toast in an oven?",
    ingredients: [
      {
        ingredient: "bread",
        quantity: "2 slices",
      },
    ],
    steps: [
      "Preheat the oven to 175 degrees C (350 degrees F).",
      "Place bread in the oven",
      "Bake for 4 minutes. Flip the bread over and bake the other side.",
    ],
    rating: [1, 18],
    country: "United States",
    id: "61e3d70f8ca20c4e18b0fa44",
  };

  const user = useContext(UserContext);
  const [, params] = useRoute("/recipe/:id");
  let error = null;

  if (!params) {
    error = 404;
  }

  const getBodyContent = () => {
    if (error === 404) {
      return <Redirect to="/recipe/notfound" />;
    }
    if (error) {
      return <RecipeError code={error} />;
    } else {
      return <RecipeDisplay recipe={sampleRecipe} />;
    }
  };

  return (
    <div id="recipe" className="page">
      {getBodyContent()}
    </div>
  );
}

export default Recipe;
