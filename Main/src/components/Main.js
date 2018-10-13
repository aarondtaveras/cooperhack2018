import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="MainBox">
      <button onClick={ this.handleClick}>Click me big boi</button>
      </div>
    );
  }
}

function handleClick(e)
{
  console.log(e.target);
}

export default Main;
