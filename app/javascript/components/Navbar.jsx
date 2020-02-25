import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to={props.path}>
        Back
      </Link>
    </nav>
  )
}

export default Navbar;
