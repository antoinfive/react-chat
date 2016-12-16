import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux' 

class FileUploader extends Component {
  constructor(props) {
    super()

    this.state = {
      data_uri: null,
      processing: false
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }


 handleOnSubmit(ev) {
  ev.preventDefault()  
 
  this.setState({
    processing: true
  })

    const data_object = { 
      data_uri: this.state.data_uri,
      filename: this.state.filename,
      filetype: this.state.filetype
    }

  socket.emit('file_upload', {file: data_object.filename, user: this.props.user}, data_object.data_uri)

 }


handleFile(ev) {
 
  const reader = new FileReader();
  const file = ev.target.files[0];

  reader.onload = (upload) => { 
    this.setState({
      data_uri: upload.target.result,
      filename: file.name,
      filetype: file.type
    })
  };

  reader.readAsDataURL(file);
}

  render() {
    let processing;
    let uploaded;
    // debugger
    if (this.state.data_uri) { 
      uploaded = ( 
        <div> 
          <h4> Success </h4>
          <img className='image-preview' src={this.state.data_uri} /> 
          <pre className='image-link-box'> {this.state.data_uri} </pre>
        </div>
      )
    }

   return (   
    <div className='row'>
      <div className='col-sm-12'>
        <form onSubmit={this.handleOnSubmit} encType="multipart/form-data">
          <input type="file" onChange={this.handleFile} />
          <input className="btn btn-primary" type="submit" value="Upload"/>
        </form>
        
      </div>
    </div>
    )

    }
  } 

function mapStateToProps(state, ownProps){
  return { user: state.user }
}

export default connect(mapStateToProps)(FileUploader);


















