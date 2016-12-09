import React from 'react'
import ChatContainer from './containers/ChatContainer'
import WelcomePage from './common/WelcomePage'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: ''
    }

    this.updateUser = this.updateUser.bind(this)
  }
  
  updateUser(user){
    this.setState({user: user })
    localStorage.setItem('user', user)
  } 

  currentUser(){
   if (localStorage.getItem('user') == null){
    return false 
   }
    return true
  }
  render() {
    return (
      <div>
        {this.currentUser() ? <ChatContainer /> : <WelcomePage newUser={this.updateUser}/>}
      </div> 
    )
  }
}
