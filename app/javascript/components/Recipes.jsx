import React from 'react'
import { Link } from "react-router-dom"
import Navbar from './Navbar'
import CreateRecipeBtn from './Recipes/CreateRecipeBtn'

class Recipes extends React.Component {
  state = {
    recipes: []
  }

  renderRecipes() {
    return this.state.recipes.map(recipe => {
      return (
        <div className="col-sm-12 col-md-4 mb-5" key={recipe.name}>
          <div className="full-r">
            <div
              className="r-photo"
              style={{ backgroundImage: `url(${recipe.image})` }}
            >
            </div>
            <div className="r-content p-2">
              <h5 className="r-title text-center py-3">{recipe.name}</h5>
              <p className="r-ingredients">{recipe.ingredients}</p>
              <p className="r-instructions">{recipe.instructions}</p>
            </div>
            <Link to={`/recipes/${recipe.id}`} className="stretched-link" />
          </div>
        </div>
      )
    })
  }

  componentDidMount() {
      const url = "/api/v1/recipes/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ recipes: response }))
        .catch(() => this.props.history.push("/"));
  }

  render () {
    return (
      <div className="full-page">
        <div className="header">
          <Navbar path="/" />
          <div className="header-title">
            <h1>Recipes List</h1>
          </div>
        </div>
        <div className="container mt-5">
          <CreateRecipeBtn />
          <hr />
          <div className="row">
            {this.renderRecipes()}
          </div>
        </div>
      </div>
    )
  }
}

export default Recipes
