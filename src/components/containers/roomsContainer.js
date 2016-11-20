import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

class RoomsContainer extends Component { 
  constructor(props){
    debugger
    super()
  }
  
  render() {
    const rooms = this.props.rooms.map( (room) => { 
      return ( 
        <ListGroupItem onClick={()=> { console.log('gotem')}}>
          {room.title}
        </ListGroupItem> 
      )
    })
    return (
      <div >
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
export default connect(mapStateToProps)(RoomsContainer)
