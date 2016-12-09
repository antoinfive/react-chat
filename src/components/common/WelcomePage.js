import React, { Component } from 'react'
import { InputGroup, Button, PageHeader, FormGroup, FormControl } from 'react-bootstrap'

class WelcomePage extends Component { 
  constructor(props){
    super(props) 
    this.state = { 
      input: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSumbit.bind(this)

  }
  
  handleOnChange(ev){
    this.setState({input: ev.target.value})
    console.log(ev.target.value)
  }

  handleOnSumbit(ev){
    ev.preventDefault()
    this.props.newUser(this.state.input)
    this.setState({ input: ''})
  }

  render(){ 
    return (
      <div> 
       <PageHeader> Welcome! What would you like to be called? </PageHeader>   
          <form> 
            <FormGroup> 
              <InputGroup value={this.state.input}>
               <FormControl onChange={this.handleOnChange} />
               <Button bsStyle="primary" onClick={this.handleOnSubmit}> Submit </Button>
              </InputGroup>
            </FormGroup>
          </form>
        </div> 
    )  
  }
}

export default WelcomePage;
