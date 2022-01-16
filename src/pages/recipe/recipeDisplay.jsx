import React, { useContext } from "react";

import UserContext from "../../contexts/userContext";


function RecipeDisplay(props) {
  const user = useContext(UserContext);

  return (
      <div id="recipe">Display recipe here for id {props.id}
        <div id="preview">
          <div id="info">
            <h1>{props.id}</h1>
          </div>
          <div id="picture">
            <h1>{props.id}</h1>
          </div>


        </div>
        <div id="ingredients"></div>
        <div id="instructions"></div>
    </div>
  );
}

export default RecipeDisplay;