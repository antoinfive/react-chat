import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as roomActions from '../../actions/roomActions'
import { bindActionCreators } from 'redux'

class RoomsContainer extends Component { 
  constructor(props){
    super()
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  
  handleOnClick(room){
    socket.emit("unsubscribe") 
    socket.emit("subscribe", { room: room.title})
    this.props.joinRoom(room)   
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
  return bindActionCreators({ joinRoom: roomActions.joinRoom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer)
