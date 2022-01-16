import React, { useContext } from "react";
import { Link, useRoute } from "wouter";

import { SITE_NAME } from "../constants/site";

import UserContext from "../contexts/userContext";

// TODO: add header links

function Header() {
  const user = useContext(UserContext);
  const [isHomePage] = useRoute("/");
  
  const loginout = {
    url: user.IsLoggedIn ? "logout" : "login",
    title: user.IsLoggedIn ? "Log Out" : "Log In"
  }
  
  return (
    <div id="header">
      <div id="header-title">
        {!isHomePage && <Link href="/">{SITE_NAME}</Link>}
      </div>
      
      <div id="header-links">
        <Link href="/discover">Discover</Link>
        <Link href="/search">Search</Link>
        <Link href={`/${loginout.url}`}>{loginout.title}</Link>
      </div>
    </div>
  );
}

export default Header;