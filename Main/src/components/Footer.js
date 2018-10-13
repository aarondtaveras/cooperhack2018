import React, { Component } from 'react';

class Footer extends Component {
  state = {
    firstName: 'Michael Nurilov',
    secondName: 'Aaron Taveres',
    thirdName: 'Michelle Li',
    fourthName: 'Toby Au'
  }
  render() {
    return (
      <div className="FooterText">
        <p>Created by: {this.state.firstName}, {this.state.secondName}, {this.state.thirdName}, {this.state.fourthName}</p>
      </div>
    );
  }
}

export default Footer;