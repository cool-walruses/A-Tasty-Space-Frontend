import React, { useContext, useState, useEffect } from "react";

import { FORMAT_RATING } from "../../constants/format";
import { BACKEND_URL } from "../../constants/site";
import { UpArrow, DownArrow } from "../../components/svgs";
import { RecipeImages } from "../../components/recipeImages";

import UserContext from "../../contexts/userContext";

import Ingredients from "./recipeDisplay/ingredients";

function RecipeDisplay({ recipe }) {
  const user = useContext(UserContext);
  const [constants, setConstants] = useState({
    difficulty: [],
    time: [],
  });
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

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

  const getImage = () =>
    image
      ? image
      : "https://place-hold.it/1000x1000/6E3B16/FFFFFF?text=no image";

  const getInstructions = () => {
    return (
      <ol>
        {steps.map((step, i) => (
          <li key={i}>
            <span>{step}</span>
          </li>
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

  const handleUpvote = () => {
    if (upvoted || downvoted) return;

    fetch(`${BACKEND_URL}/api/upvote/recipe/${id}`, { method: "POST" }).then(
      (result) => {
        if (result.status === 200) setUpvoted(true);
      }
    );
  };

  const handleDownvote = () => {
    if (upvoted || downvoted) return;

    fetch(`${BACKEND_URL}/api/downvote/recipe/${id}`, { method: "POST" }).then(
      (result) => {
        if (result.status === 200) setDownvoted(true);
      }
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
              <div className="up">
                {upvoted
                  ? FORMAT_RATING(rating[0] + 1)
                  : FORMAT_RATING(rating[0])}
              </div>
              <div
                role="button"
                className={`arrow upvote ${upvoted ? "clicked" : ""}  ${upvoted || downvoted ? "" : "clickable"}`}
                onClick={() => handleUpvote()}
              >
                <UpArrow />
              </div>

              <div className="down">
                {downvoted
                  ? FORMAT_RATING(rating[1] + 1)
                  : FORMAT_RATING(rating[1])}
              </div>
              <div
                role="button"
                className={`arrow downvote ${downvoted ? "clicked" : ""}  ${upvoted || downvoted ? "" : "clickable"}`}
                onClick={() => handleDownvote()}
              >
                <DownArrow />
              </div>
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
