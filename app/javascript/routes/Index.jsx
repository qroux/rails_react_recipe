import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/Home"
import Recipes from "../components/Recipes"
import Recipe from "../components/Recipe"
import CreateRecipe from "../components/CreateRecipe"

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/recipes/new" exact component={CreateRecipe} />
      <Route path="/recipes/:id" exact component={Recipe} />
    </Switch>
  </BrowserRouter>
);
