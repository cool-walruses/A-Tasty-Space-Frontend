import React, { useContext } from "react";
import { Link } from "wouter";

import UserContext from "../contexts/userContext";


function Home() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

export default Home;