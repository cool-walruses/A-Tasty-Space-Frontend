import React, { useContext, useState, useEffect } from "react";

import { FORMAT_RATING } from "../../constants/format";
import { BACKEND_URL } from "../../constants/site";
import { UpArrow, DownArrow } from "../../components/svgs";

import UserContext from "../../contexts/userContext";

import Ingredients from "./recipeDisplay/ingredients";

function RecipeDisplay({ recipe }) {
  const user = useContext(UserContext);
  const [constants, setConstants] = useState({
    difficulty: ["beginner", "intermediate", "advanced"],
    time: ["<1 hour", "1-2 hours", "2-3 hours", ">3 hours"],
  });
  const {
    id,
    name,
    time,
    difficulty,
    description,
    ingredients,
    steps,
    rating,
    image,
  } = recipe;

  const getImage = () => (image ? image : "https://place-hold.it/1000x1000/6E3B16/FFFFFF?text=no image");

  const getInstructions = () => {
    return (
      <ol>
        {steps.map((step, i) => (
          <li key={i}><span>{step}</span></li>
        ))}
      </ol>
    );
  };

  const fetchConstants = () => {
    fetch(`${BACKEND_URL}/api/constants`)
      .then((result) => result.json())
      .then(
        (result) => {
          setConstants(result);
        },
        (error) => {}
      );
  };

  useEffect(() => {
    fetchConstants();
  }, []);

  return (
    <>
      <div id="recipe-preview">
        <div id="recipe-info">
          <div className="text-group">
            <h1>{name}</h1>
            <div className="desc">{description}</div>
          </div>
          <div className="about-group">
            <div className="difficulty">
              <b>Difficulty:</b> {constants.difficulty[difficulty]}
            </div>
            <div className="time">
              <b>Estimated Time:</b> {constants.time[time]}
            </div>
            <div className="rating">
              <div className="rating up">{FORMAT_RATING(rating[0])}</div>
              <UpArrow />

              <div className="rating down">{FORMAT_RATING(rating[1])}</div>
              <DownArrow />
            </div>
          </div>
        </div>
        <div
          id="recipe-picture"
          style={{ backgroundImage: `url('${getImage()}')` }}
        />
      </div>
      <div id="recipe-ingredients">
        <Ingredients ingredients={ingredients} />
      </div>
      <div id="recipe-instructions">
        <h1>Instructions</h1>
        {getInstructions()}
      </div>
    </>
  );
}

export default RecipeDisplay;
