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

          <Link href="/search" className="button-link">
            Start Searching
          </Link>
        </div>
      </div>

      <div className="body-objects">
        <PageSection
          image="https://media.discordapp.net/attachments/931319907298213949/932197902657396766/IMG_1438.png"
          title="Cook."
          text="Find recipes based on ingredients, difficulty, cooking time, and many more options!"
        />

        <PageSection
          image="https://media.discordapp.net/attachments/931319907298213949/932222420272689222/IMG_1441.png"
          title="Share."
          text="Sharing is caring! Upload your own recipes to share with Foodies world wide!"
        />

        <PageSection
          image="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/ChefCooky.png?v=1642285067376"
          title="Connect."
          text="i am crying"
        />
      </div>
      
      <img src="https://cdn.glitch.global/d94bd104-e04e-4362-8c25-9302f465398d/ToastyAndCooky.jpg?v=1642320646772" id="bottom-mascot" />
    </div>
  );
}

export default Home;
