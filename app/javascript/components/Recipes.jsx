import React from 'react'
import { Link } from "react-router-dom"

class Recipes extends React.Component {
  state = {
    recipes: []
  }

  renderRecipes() {
    return this.state.recipes.map(recipe => {
      return (
        <div className="full-r">
          <img className="r-img" src={recipe.image} alt="Card image cap" />
          <div className="r-content">
            <h5 className="r-title">{recipe.name}</h5>
            <p className="r-ingredients">{recipe.ingredients}</p>
            <p className="r-instructions">{recipe.instructions}</p>
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
            console.log("okidoki");
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ recipes: response }))
        .catch(() => this.props.history.push("/"));
  }

  render () {
    return (
      <div className="container">
        <h1>Recipes List</h1>
        <div className="recipes-container">
          {this.renderRecipes()}
        </div>
      </div>
    )
  }
}

export default Recipes
