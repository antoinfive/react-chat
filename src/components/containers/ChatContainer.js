import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as messageActions from '../../actions/messagesActions'
import { bindActionCreators } from 'redux'
import ChatLog from '../chatLog'
import { Button } from 'react-bootstrap'

class ChatContainer extends Component { 
  constructor(props) {
   
     super()
     this.state = { 
       input : '',
       messages: props.messages 
     }
     this.handleOnChange = this.handleOnChange.bind(this)
     this.handleOnSubmit = this.handleOnSubmit.bind(this)
   }  

  componentDidMount(){
     socket.on('chat message', (message) => {
       this.props.newMessage(message) 
       console.log('received message', message)
     })
  }

  handleOnChange(ev) {
   this.setState({ input: ev.target.value}) 
  } 

  
  handleOnSubmit(ev) {
    ev.preventDefault()
    // this.props.newMessage(this.state.input)
    this.setState({ input: '' })
    socket.emit('chat message', this.state.input)
  }

  render() {
    const messages = this.props.messages.map((message) => {
      return ( <li> {message} </li> )
    })

    return (
      <div>
        <ChatLog />
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} value={this.state.input}/>
          <Button bsStyle="primary"> Send </Button>
        <input type='submit'/>
      </form>

      <h1> 
        {messages} 
     </h1>
   </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { messages: state.messages }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newMessage: messageActions.newMessage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
