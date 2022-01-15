import React, { useContext } from "react";

import UserContext from "../../contexts/userContext";


function RecipeDisplay(props) {
  const user = useContext(UserContext);

  return (
      <div>Display recipe here for id {props.id}</div>
  );
}

export default RecipeDisplay;