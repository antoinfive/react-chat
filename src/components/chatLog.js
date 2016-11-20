import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap' 
import ChatDetail from './chatDetail'

export default (props) => {
  return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={13} md={8} />
          <Col xs={6} md={4} />
            <ChatDetail /> 
        </Row>
      </Grid>
    </div>
  )


}


