import React, { useContext } from "react";

import "./recipeError/styles.sass";

function RecipeError({ error }) {
  return (
    <div id="recipe-error">
      <div class="text-content">
        <h1>Error loading recipe!</h1>
        <span>Please refresh the page to try again.</span>
      </div>
      <img src="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/CookyPop.png?v=1642344817482" />
    </div>
  );
}

export default RecipeError;
