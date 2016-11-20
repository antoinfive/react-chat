import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap'

class RoomsContainer extends Component { 
  constructor(){
    super()
  }
  
  render() {
    return (
      <div >
        <Col xs={4} mdPull={1}> 
          <ListGroup>
            <ListGroupItem> Music Group </ListGroupItem>
            <ListGroupItem> The Cosmos </ListGroupItem> 
            <ListGroupItem> I'm sad, halp </ListGroupItem>
          </ListGroup>
        </Col>
      </div>
    )

  }

}

export default RoomsContainer
