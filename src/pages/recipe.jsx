import React, { useContext, useState, useEffect } from "react";
import { useRoute, Redirect } from "wouter";

import { BACKEND_URL } from "../constants/site";

import UserContext from "../contexts/userContext";

import RecipeDisplay from "./recipe/recipeDisplay";
import RecipeError from "./recipe/recipeError";

import "./recipe/styles.sass";

function Recipe(props) {
  const user = useContext(UserContext);
  const [, params] = useRoute("/recipe/:id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState({});

  if (!params) {
    return <Redirect to="/recipe/notfound" />;
  }

  const fetchRecipe = () => {
    fetch(`${BACKEND_URL}/recipe/${params.id}`)
      .then((result) => result.json())
      .then(
        (result) => {
          console.log(result);
          if (result)
            setRecipe(result);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          setError(true);
        }
      );
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  console.log(recipe.id);

  const getBodyContent = () => {
    if (loading)
      return;

    if (!recipe.id)
      return <Redirect to="/recipe/notfound" />;
     else if (error)
      return <RecipeError />;
     else if (recipe.id)
      return <RecipeDisplay recipe={recipe} />;
     else
      return;
  };

  return (
    <div id="recipe" className="page">
      {getBodyContent()}
    </div>
  );
}

export default Recipe;
