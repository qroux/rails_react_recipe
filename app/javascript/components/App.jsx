import React from "react"
import Routes from "../routes/Index"
import deviseUser from '../apis/deviseUser'
import Header from './Header'

class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount (){
    deviseUser.get('/api/v1/devise/show',{
    })
    .then((response) => {
      if(response.data.email){
        this.setState({
          currentUser: response.data.email
        })
      } else {
        this.setState({
          currentUser: "axios returned an error"
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  updateCurrentUser = (email) => {
    this.setState({
      currentUser: email
    })
  }


  render () {
    console.log(`depuis app render, state = ${this.state.currentUser}`)
    return (
      <div>
        {Routes}
      </div>
    )
  }
}
export default App;
