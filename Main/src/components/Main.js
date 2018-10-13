import React, { Component } from 'react';

class Main extends Component {
  constructor(){
    this.state() = {
      current_theme : "default";
      themes: [
        { name: "default", primary: "", }
        { name: "dark", primary: "", }
          //secondary: ""
        }
      ]
    };
    this.switchTheme = this.switchTheme.bind(this);
  };

  switchTheme(event){
    if(this.state.current_theme==="default"){
      this.setState({
        current_theme: "dark"
      })
    }
    else{
      this.setState({
        current_theme: "default"
      })
    }
  }

  render() {

    var current_color;
    this.state.current_theme

    return (
      <div className="MainBox">
        <h1>Machine Learning!</h1>
      </div>
    );
  }
}



export default Main;
