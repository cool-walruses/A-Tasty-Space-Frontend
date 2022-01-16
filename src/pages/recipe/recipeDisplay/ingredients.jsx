import React, { useState } from "react";

import "./ingredients/styles.sass";

function Ingredients({ ingredients }) {
  const [listView, setListView] = useState(true);
  
  const getChangeViewButton = () => {
    const otherView = listView ? "image" : "list";
    return <button onClick={() => setListView(!listView)}>{`switch to ${otherView} view`}</button>;
  };
  
  const getIngredients = () => {};
  
  return (
    <div id="ingredients-pane">
      <h1>Ingredients</h1>
      
      {getChangeViewButton()}
      
      {getIngredients()}
    </div>
  );
}

export default Ingredients;