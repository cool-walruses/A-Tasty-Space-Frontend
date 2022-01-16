import React, { useContext } from "react";
import { Link } from "wouter";

import { SITE_NAME } from "../constants/site";

import UserContext from "../contexts/userContext";

import "./home/styles.sass";
import PageSection from "./home/pageSection";

function Home() {
  const user = useContext(UserContext);
  
  return (
    <div id="home" className="page">
      <div className="main-page">
        <div className="wrapper">
          <h1>{SITE_NAME}</h1>

          <img src="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/ChefCooky.png?v=1642285067376" />

          <Link href="/explore" className="button-link">
            Explore
          </Link>
        </div>
      </div>

      <div className="body-objects">
        <PageSection
          image="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/ChefCooky.png?v=1642285067376"
          title="Cook."
          text="Find recipes based on ingredients, difficulty, meal time, and many more options!"
        />

        <PageSection
          image="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/ChefCooky.png?v=1642285067376"
          title="Share."
          text="Find recipes based on ingredients, difficulty, meal time, and many more options!"
        />

        <PageSection
          image="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/ChefCooky.png?v=1642285067376"
          title="Learn."
          text="Find recipes based on ingredients, difficulty, meal time, and many more options!"
        />
      </div>
      
      <img src="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/ToastyAndCooky.jpg?v=1642320646772" id="bottom-mascot" />
    </div>
  );
}

export default Home;
