import React, { useContext, useState } from "react";
import { useRoute, Redirect } from "wouter";

import UserContext from "../contexts/userContext";

import RecipeDisplay from "./recipe/recipeDisplay";
import RecipeError from "./recipe/recipeError";

import "./recipe/styles.sass";

function Recipe(props) {
  const ovenToast = {
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
  const onigiri = {
    name: "Onigiti (Japanese Rice Balls)",
    time: 0,
    difficulty: 0,
    description:
      "Traditional Japanese rice balls that are super simple to make!",
    ingredients: [
      {
        ingredient: "rice",
        quantity: "1 bowl",
        _id: "61e3d70f8ca20c4e18b0fa39",
      },
      {
        ingredient: "nori seaweed",
        quantity: "1 sheet",
        _id: "61e3d70f8ca20c4e18b0fa3a",
      },
      {
        ingredient: "salt",
        quantity: "1 tsp.",
        _id: "61e3d70f8ca20c4e18b0fa3b",
      },
    ],
    steps: [
      "Make freshly cooked rice and let it cool down slightly before making onigiri.",
      "Dampen your hand with water and salt to prevent rice from sticking to your hands while flavouring the onigiri.",
      "Press the rice gently to form the rice into a triangle.",
      "Place the slice of nori on the bottom of the onigiri and wrap the onigiri with it.",
    ],
    rating: [14, 2],
    country: "Japan",
    __v: 0,
    id: "61e3d70f8ca20c4e18b0fa38",
  };
  const cookies = {
    name: "Chocolate Chip Cookies",
    time: 1,
    difficulty: 0,
    description:
      "Yummy, chewy and simple chocolate cookies that anyone can make!",
    ingredients: [
      {
        ingredient: "butter",
        quantity: "1 cup",
        _id: "61e3d70f8ca20c4e18b0fa2c",
      },
      {
        ingredient: "sugar",
        quantity: "1 cup",
        _id: "61e3d70f8ca20c4e18b0fa2d",
      },
      {
        ingredient: "eggs",
        quantity: "2",
        _id: "61e3d70f8ca20c4e18b0fa2e",
      },
      {
        ingredient: "vanilla extract",
        quantity: "1 tbsp.",
        _id: "61e3d70f8ca20c4e18b0fa2f",
      },
      {
        ingredient: "baking sode",
        quantity: "1 tsp.",
        _id: "61e3d70f8ca20c4e18b0fa30",
      },
      {
        ingredient: "hot water",
        quantity: "2 tsp.",
        _id: "61e3d70f8ca20c4e18b0fa31",
      },
      {
        ingredient: "flour",
        quantity: "3 cups",
        _id: "61e3d70f8ca20c4e18b0fa32",
      },
      {
        ingredient: "chocolate chips",
        quantity: "2 cups",
        _id: "61e3d70f8ca20c4e18b0fa33",
      },
    ],
    steps: [
      "Preheat your oven to 175 degrees C (350 degrees F).",
      "Let the butter soften and whisk it together with the sugar until the mixture is smooth.After mixing, mix in the eggs one at a time. Also mix the vanilla extract with the mixture.Dissolve the baking soda and salt into the hot water. Add dissolved solution to your mixed batter.Stir in the flour and chocolate chip until smooth. Place spoonfuls of your batter on ungreased pans or baking trays.",
      "Once your oven is done preheating, bake your cookies for about 10 minutes or whenever the edges seem nicely browned and crisp.",
    ],
    rating: [22, 0],
    country: "Canada",
    __v: 0,
    id: "61e3d70f8ca20c4e18b0fa2b",
  };
  const grilledCheese = {
    name: "Grilled Cheese",
    time: 0,
    difficulty: 0,
    description: "Simple homemade grilled cheese.",
    ingredients: [
      {
        ingredient: "butter",
        quantity: "1 tbsp.",
        _id: "61e3d70f8ca20c4e18b0fa35",
      },
      {
        ingredient: "bread",
        quantity: "2 slices",
        _id: "61e3d70f8ca20c4e18b0fa36",
      },
      {
        ingredient: "cheese",
        quantity: "1 slice",
        _id: "61e3d70f8ca20c4e18b0fa37",
      },
    ],
    steps: [
      "Spread butter on one side of both slices of bread, place the cheese betweenthe two slices of bread, and place the grilled cheese on a pan with the sideswith butter on the outside.",
      "Turn on the stove and put it on medium heat. Wait for one side to turn into agolden brown and flip the grilled cheese on its other side.",
      "Wait for the other side to turn golden brown. Be careful not to wait too long forthe second side since it takes much shorter to cook than the first side since the pan is already hot.",
    ],
    rating: [5, 9],
    country: "United States",
    __v: 0,
    id: "61e3d70f8ca20c4e18b0fa34",
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
      return <RecipeDisplay recipe={grilledCheese} />;
    }
  };

  return (
    <div id="recipe" className="page">
      {getBodyContent()}
    </div>
  );
}

export default Recipe;
