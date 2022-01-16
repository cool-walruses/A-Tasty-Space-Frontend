import React from "react";
import { Switch, Route, useRoute } from "wouter";
import Home from "../pages/home";
import Recipe from "../pages/recipe";
import Search from "../pages/search";
import NotFound from "../pages/errors/notFound";

// TODO

function PageRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/recipe/:id*" component={Recipe} />
      <Route path="/search" component={Search} />
      <Route  component={NotFound} />
    </Switch>
  );
}

export default PageRouter;