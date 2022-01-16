import React from "react";
import { Switch, Route, useRoute } from "wouter";
import Home from "../pages/home";
import RecipeNotFound from "../pages/errors/recipeNotFound";
import Recipe from "../pages/recipe";
import Discover from "../pages/searchDuplicate";
import Search from "../pages/search";
import NotFound from "../pages/errors/notFound";

// TODO

function PageRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/recipe/notfound" component={RecipeNotFound} />
      <Route path="/recipe/:id*" component={Recipe} />
      <Route path="/discover" component={Discover} />
      <Route path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default PageRouter;
