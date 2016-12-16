import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel, ListGroupItem, ListGroup, Col } from 'react-bootstrap'

export default (props) => {
  return (
    <ListGroupItem> 
      <form>
        <FormGroup>
          <ControlLabel> Add a new Chat Room </ControlLabel>
          <FormControl onChange={props.handleOnChange} value={props.value}>
          </FormControl>
          <Button 
            bsStyle="primary" 
            bsSize="small" 
            type="submit"
            onClick={props.handleNewRoom}
            block> Send </Button>
        </FormGroup>
      </form>
    </ListGroupItem>
  )


}
