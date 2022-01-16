import React, { useContext, useState, useEffect } from "react";

import UserContext from "../contexts/userContext";

import SearchFilter from "./search/searchFilter";
import RecipeCards from "./search/recipeCards";

import "./search/styles.sass";

function Search() {
  const user = useContext(UserContext);

  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [constants, setConstants] = useState({
    ingredients: ["one", "two", "three"],
    time: ["<1 hour", "1-2 hours", "2-3 hours", ">3 hours"],
    difficulty: ["beginner", "intermediate", "advanced"],
  });
  const [filterDifficulty, setFilterDifficulty] = useState(null);
  const [filterTime, setFilterTime] = useState(null);
  const [filterIngredients, setFilterIngredients] = useState([]);

  const handleDifficulty = (difficulty) => {
    if (difficulty === filterDifficulty) {
      setFilterDifficulty(null);
    } else {
      setFilterDifficulty(difficulty);
    }
  };

  const handleTime = (time) => {
    if (time === filterTime) {
      setFilterTime(null);
    } else {
      setFilterTime(time);
    }
  };

  const handleIngredient = (ingredient) => {
    const i = filterIngredients.indexOf(ingredient);
    if (i > -1) {
      setFilterIngredients([
        ...filterIngredients.slice(0, i),
        ...filterIngredients.slice(i + 1),
      ]);
    } else {
      setFilterIngredients(filterIngredients.concat([ingredient]));
    }
  };

  useEffect(() => {
    console.log("API fetch call for filter constants");
  }, []);

  useEffect(() => {
    console.log("API fetch call for search");
  }, [filterIngredients, filterTime, filterDifficulty]);

  return (
    <div id="search" className="page">
      <div id="search-filters">
        <SearchFilter
          className="difficulty"
          list={constants.difficulty}
          selected={filterDifficulty}
          handleChange={handleDifficulty}
        />

        <SearchFilter
          className="time"
          list={constants.time}
          selected={filterTime}
          handleChange={handleTime}
        />

        <SearchFilter
          className="ingredients"
          multiselect
          list={constants.ingredients}
          selected={filterIngredients}
          handleChange={handleIngredient}
        />
      </div>

      <RecipeCards
        recipes={searchResults}
        loading={searchLoading}
        error={searchError}
        constants={{ time: constants.time, difficulty: constants.difficulty }}
      />
    </div>
  );
}

export default Search;
