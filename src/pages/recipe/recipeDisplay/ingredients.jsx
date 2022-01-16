import React, { useState } from "react";

import "./ingredients/styles.sass";
import IngredientImage from "./ingredients/ingredientImage";

function Ingredients({ ingredients }) {
  const [listView, setListView] = useState(false);

  const getChangeViewButton = () => {
    const otherView = listView ? "image" : "list";
    return (
      <button
        onClick={() => setListView(!listView)}
      >{`switch to ${otherView} view`}</button>
    );
  };

  const getIngredients = () => {
    if (listView) {
      return (
        <ul className="ingredients-list">
          {ingredients.map((item, i) => (
            <li key={i}>{item.quantity} {item.ingredient}</li>
          ))}
        </ul>
      );
    } else {
      return <div className="ingredients-list">{ingredients.map((item, i) => <IngredientImage item={item} key={i} />)}</div>;
    }
  };

  return (
    <div id="ingredients-pane">
      <h1>Ingredients</h1>

      {getChangeViewButton()}

      {getIngredients()}
    </div>
  );
}

export default Ingredients;
