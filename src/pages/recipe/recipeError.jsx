import React, { useContext } from "react";


function RecipeError({ error }) {

  return (
      <div>Error recipe code: {error}</div>
  );
}

export default RecipeError;