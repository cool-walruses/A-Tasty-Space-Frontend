import React, { useContext } from "react";

import UserContext from "../../contexts/userContext";


function RecipeDisplay(props) {
  const user = useContext(UserContext);

  return (
      <div>Display recipe here for id {props.id}
      <div id="preview">
          <h1>{props.id}</h1>
      
      </div>
      <div id="ingredients"></div>
      <div id="instructions"></div>
    
    </div>
  );
}

export default RecipeDisplay;