import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as messageActions from '../../actions/messagesActions'
import { bindActionCreators } from 'redux'
import ChatLog from '../chatLog'
import { Glyphicon, InputGroup, PageHeader, Col, Button, FormGroup, FormControl } from 'react-bootstrap'


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
       this.props.newMessage({user: 'antoin', message: message}) 
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
    return (
      <div>
        <PageHeader> Welcome to React Chat </PageHeader>
        <ChatLog messages={this.props.messages} />
        <form>
          <FormGroup>
            <InputGroup>
            <FormControl onChange={this.handleOnChange} value={this.state.input}/>
            <InputGroup.Addon onClick={ () => { console.log('got em')}}> 
              <Glyphicon glyph="music" />
              </InputGroup.Addon>
            <InputGroup.Button> 
              <Button bsStyle="primary" type="submit" onClick={this.handleOnSubmit}> Send </Button>
            </InputGroup.Button>
          </InputGroup>
          </FormGroup>
        </form>
    
      <h1> 
       
     </h1>
   </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  debugger
  return { messages: state.activeRoom.messages, room: state.activeRoom }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newMessage: messageActions.newMessage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
