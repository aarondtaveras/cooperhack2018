import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

class Input extends Component{
  render(){
    return(
      <div className="InputBox">
        <form>
          <FormGroup bsSize="Normal">
          <FormControl type="text" placeholder="Enter words or sentences" />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Input;
