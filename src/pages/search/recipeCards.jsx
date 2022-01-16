import React, { useContext } from "react";
import Masonry from "react-masonry-component";

import "./recipeCards/styles.sass";
import Card from "./recipeCards/card";

function RecipeCards({ recipes, loading, error, constants }) {
  const getCard = (recipe) => {
    return (
      <Card
        recipe={recipe}
        timeString={constants.time[recipe.time]}
        difficultyString={constants.difficulty[recipe.difficulty]}
      />
    );
  };

  const getCards = () => {
    if (loading) {
      return <span id="loading">Loading...</span>;
    } else if (error) {
      return <span id="error">An error occurred during the search.</span>;
    } else if (recipes.length > 0) {
      return (
        <Masonry
          className={"card-masonry"}
          elementType={"div"}
          options={{ columnWidth: 300, itemSelector: ".card", gutter: 20 }}
        >
          {recipes.map((recipe) => getCard(recipe))}
        </Masonry>
      );
    } else {
      return <span id="not-found">No results.</span>;
    }
  };

  return <div id="recipe-cards">{getCards()}</div>;
}

export default RecipeCards;
