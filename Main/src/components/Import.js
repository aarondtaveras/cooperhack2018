import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class ImportFile extends Component {
  render() {
    return (
      <div className="ImportButton">
      {formInstance}
      </div>
    );
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const formInstance = (
  <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
    />
);

export default ImportFile;
