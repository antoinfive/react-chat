import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default (props) => { 
  return (
    <div>
       <FormGroup controlId={1}>
        <ControlLabel>Upload your files here</ControlLabel> 
        <FormControl 
          id="formControlsFile"
          type="file"
          label="file"
        />
      </FormGroup>
    </div>
  )



}
