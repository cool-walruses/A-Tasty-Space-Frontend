import React, { useContext } from "react";
import { Link } from "wouter";

import UserContext from "../contexts/userContext";


function Search() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Search</h1>
    </>
  );
}

export default Search;