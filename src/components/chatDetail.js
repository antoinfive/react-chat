import React from 'react'
import { Col, Alert, Panel, Image } from 'react-bootstrap'

export default (props) => {
 let imageView;
  if(props.image) {
    imageView = (
      <div> 
        <Col xs={6} md={4}>
        <Image src={props.image} rounded />
        </Col>
      </div>
    )
  }    
   return (
    <div>
      <Panel bsStyle="info" header={props.user}>
        {props.message} 
    
      </Panel>
    </div>
  )
}
