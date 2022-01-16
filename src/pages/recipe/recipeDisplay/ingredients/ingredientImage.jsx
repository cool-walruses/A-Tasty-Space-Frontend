import React from "react";

import { image, placeholderImage } from "./images";

function IngredientImage({ item }) {
  const { ingredient, quantity } = item;
  
  const ingredientImage = image[ingredient] ? image[ingredient] : placeholderImage;
  
  return (
    <div className="ingredient-image">
      <div><img src={ingredientImage} /></div>
      <span className="name">{ingredient}</span>
      <span className="quantity">{quantity}</span>
    </div>
  );
}

export default IngredientImage;