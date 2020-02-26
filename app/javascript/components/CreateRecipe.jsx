import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Form from './Recipes/Form'

class CreateRecipe extends React.Component {
  render (){
    return (
      <div className="fullpage">
        <div className="header">
          <Navbar path="/recipes" />
          <div className="header-title">
            <h1>Create your own recipe</h1>
          </div>
        </div>
        <div className="content container py-5">
          <Form history={this.props.history} />
        </div>
      </div>
    )
  }
}

export default CreateRecipe
