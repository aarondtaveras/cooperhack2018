import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import ImportFile from './components/Import';
import Main from './components/Main';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap';

class App extends Component {

  constructor(){
    super();
    // Creating our state object - decide what data this component needs to store/manipulate
    this.state = {
      current_theme : {
        name: "default",
        color: "rgb(66, 134, 244)"
      }
      // themes: [
      //     {name: "default",primary:"rgb(66, 134, 244)"},
      //     {name: "dark",primary:"rgb(20, 41, 76)"}
      //     // secondary:""}
      //   ]
    };
    this.switchTheme = this.switchTheme.bind(this);
  };

  switchTheme(event){

    if(this.state.current_theme.name==="default"){
      this.setState({
        current_theme : {name: "dark",color:"rgb(20, 41, 76)"}
      })
    }
    else if(this.state.current_theme.name==="dark") {
      this.setState({
        current_theme: {name:"default",color:"rgb(66, 134, 244)"}
      })
    }
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.current_theme.color}}>
          <Button onClick={this.switchTheme} bsStyle="primary" className="ThemeButton">Themes</Button>
          <ImportFile />
          <Input />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;
