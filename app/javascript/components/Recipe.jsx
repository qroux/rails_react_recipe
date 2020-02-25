import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

class Recipe extends React.Component {
  state = {}

  componentDidMount (){
    const id = this.props.match.params.id;
    const url = `/api/v1/show/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ recipe: response }))
      .catch(() => this.props.history.push("/recipes"));
  }

  renderRecipe (){
    const { recipe } = this.state

    if (recipe === undefined) {
      return <div>Loading</div>
    } else {
      let ingredientList = recipe.ingredients.split(",").map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
      ));

      return (
        <div className="full-page">
          <div className="r-header" style={{ backgroundImage: `url(${recipe.image})`, height: '30vh', width: '100%' }}>
            <Navbar path="/recipes" />
            <div className="header-title">
              <h1>{recipe.name}</h1>
            </div>
          </div>
          <div className="container-fluid mt-5 px-5 r-content">
            <div className="row">
              <div className="ingredients col-2">
                <h3>Ingredients</h3>
                <p>{ingredientList}</p>
              </div>
              <div className="instructions col-10 px-5">
                <h3>Instructions</h3>
                <p>{recipe.instruction}</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div onClick={this.deleteRecipe} className="btn btn-danger">Delete</div>
          </div>
        </div>
      )
    }
  }

  deleteRecipe = () => {
    const id = this.state.recipe.id;
    const url = `/api/v1/destroy/${id}`;
    fetch(url, {method: 'DELETE'})
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/recipes"))
      .catch(error => console.log(error.message))
  }

  render () {
    return (
      <div>
        {this.renderRecipe()}
      </div>
    )
  }
}

export default Recipe;
