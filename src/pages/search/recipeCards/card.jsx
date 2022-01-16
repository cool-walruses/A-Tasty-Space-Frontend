import React, { useContext } from "react";
import { Link } from "wouter";

import { UpArrow, DownArrow } from "../../../components/svgs";

function Card({ recipe, difficultyString, timeString }) {
  const { id, name, description, rating, image } = recipe;
  
  const formatNumber = (number) => {
    if (number < 1000) {
      return number;
    }
    else {
      return Math.floor(number/100)/10 + 'k';
    }
  }

  return (
    <Link href={`/recipe/${id}`} className="card">
      <img src={image} />
      <div className="text">
        <div className="name">{name}</div>
        <div className="desc">{description}</div>
        <div className="misc">
          <div className="left">
            <div className="rating up">{formatNumber(rating[0])}</div>
            <UpArrow />
            
            <div className="rating down">{formatNumber(rating[1])}</div>
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
