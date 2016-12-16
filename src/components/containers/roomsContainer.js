import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as roomActions from '../../actions/roomActions'
import { bindActionCreators } from 'redux'
import NewRoom from '../newRoom' 

class RoomsContainer extends Component { 
  constructor(props){
    super()
    this.state = {
      input: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleNewRoom = this.handleNewRoom.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  
  handleOnClick(room){
    socket.emit("unsubscribe") 
    socket.emit("subscribe", { room: room.title})
    this.props.joinRoom(room)   
  }  

  handleNewRoom(ev) {
    ev.preventDefault()
    this.props.newRoom(this.state.input)
    this.setState({input: ''})
  }
  
  handleOnChange(ev) {
    this.setState({input: ev.target.value})
  }

  render() {
    const rooms = this.props.rooms.map( (room) => { 
      return ( 
        <ListGroupItem key={room.title} onClick={this.handleOnClick.bind(null, room)}>
          {room.title}
        </ListGroupItem> 
      )
    })

    return (
      <div>
        <Col xs={4} mdPull={1}> 
          <ListGroup>
            {rooms}
            <NewRoom handleOnChange={this.handleOnChange} handleNewRoom={this.handleNewRoom} value={this.state.input}/>
          </ListGroup>
        </Col>
      </div>
    )

  }

}

function mapStateToProps(state, ownProps) {
 return { rooms: state.rooms }
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ joinRoom: roomActions.joinRoom, newRoom: roomActions.newRoom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer)
