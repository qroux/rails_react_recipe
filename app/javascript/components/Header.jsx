import React from 'react'

class Header extends React.Component {
  renderAdmin (){
    if (this.props.currentUser == null) {
      console.log(this.props.currentUser)
      return <div>Not logged in</div>
    } else {
      return <div>loggedIn</div>
    }
  }
  render (){
    return <div>{this.renderAdmin()}</div>
  }
}

export default Header;
