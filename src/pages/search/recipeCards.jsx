import React, { useContext } from "react";
import Masonry from "react-masonry-css";

import "./recipeCards/styles.sass";
import Card from "./recipeCards/card";

function RecipeCards({ recipes, loading, error, constants }) {
  const recipe1 = {
    id: "1231a51a",
    name: "Sample Food",
    description:
      "A sample recipe. This can go multiple lines, and tell you about the recipe!",
    difficulty: 0,
    time: 0,
    rating: [10, 2],
    image: "https://place-hold.it/250x300",
  };
  const recipe2 = {
    id: "1231a51a",
    name: "Sample Food",
    description:
      "A sample recipe. This can go multiple lines, and tell you about the recipe!",
    difficulty: 1,
    time: 3,
    rating: [2559, 100],
    image: "https://place-hold.it/300x450",
  };

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
      return <span id="error">An error occured during the search.</span>;
    } else if (recipes) {
      return (
        <Masonry
          breakpointCols={3}
          className="card-masonry"
          columnClassName="card-masonry_column"
        >
          {[
            getCard(recipe1),
            getCard(recipe2),
            getCard(recipe1),
            getCard(recipe2),
            getCard(recipe1),
            getCard(recipe2),
            getCard(recipe1),
            getCard(recipe2),
            getCard(recipe1),
          ]}
        </Masonry>
      );
    }
  };

  return <div id="recipe-cards">{getCards()}</div>;
}

export default RecipeCards;
