import React, { useContext } from "react";
import { Link } from "wouter";
import { FORMAT_RATING } from '../../../constants/format';

import { UpArrow, DownArrow } from "../../../components/svgs";
import { RecipeImages } from "../../../components/recipeImages";

function Card({ recipe, difficultyString, timeString }) {
  const { id, name, description, rating } = recipe;
  
  const getImage = () => RecipeImages[id] ? RecipeImages[id] : "https://place-hold.it/300x300/6E3B16/FFFFFF?text=no image";
  
  return (
    <Link href={`/recipe/${id}`} className="card">
      <img src={getImage()} />
      <div className="text">
        <div className="name">{name}</div>
        <div className="desc">{description}</div>
        <div className="misc">
          <div className="left">
            <div className="rating up">{FORMAT_RATING(rating[0])}</div>
            <UpArrow />
            
            <div className="rating down">{FORMAT_RATING(rating[1])}</div>
            <DownArrow />
          </div>
          <div className="right">
            <div className="difficulty">{difficultyString}</div>
            <div className="time">{timeString}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
