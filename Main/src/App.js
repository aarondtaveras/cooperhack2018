import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Input from './components/Input';
import ImportFile from './components/Import';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ImportFile />
        <Input />
      </div>
    );
  }
}

export default App;
