import React from "react";

import "./notFound/styles.sass";

function RecipeNotFound() {
  return (
    <div id="not-found" className="page">
      <h1>404 Recipe Not Found!</h1>
      <img src="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/404RecipeCooky.png?v=1642325745609" />
    </div>
  );
}

export default RecipeNotFound;
