import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class Input extends Component{
  render(){
    return(
      <div className="InputBox">
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Input text</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Text" />
      </FormGroup>
      </div>
    );
  }
}

export default Input;
