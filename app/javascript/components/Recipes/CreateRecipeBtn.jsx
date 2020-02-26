import React from 'react'
import { Link } from 'react-router-dom'

class CreateRecipeBtn extends React.Component {
  render (){
    return (
      <div className="d-flex justify-content-sm-end align-items-center py-3">
        <h3>Add a recipe</h3>
        <Link to="/recipes/new" className="btn btn-success ml-4"><strong>+</strong></Link>
      </div>
    )
  }
}


export default CreateRecipeBtn
