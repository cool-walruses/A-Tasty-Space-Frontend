import React, { useContext } from "react";

import UserContext from "../contexts/userContext";

// TODO: add site names and header links

function Header() {
  const user = useContext(UserContext);
  const loginout = {
    url: user.IsLoggedIn ? "logout" : "login",
    title: user.IsLoggedIn ? "Log Out" : "Log In"
  }
  
  return (
    <div id="header">
      <div id="header-title">
        <a href="/">Site Name</a>
      </div>
      
      <div id="header-links">
        <a href="/about">About</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href={`/${loginout.url}`}>{loginout.title}</a>
      </div>
    </div>
  );
}

export default Header;