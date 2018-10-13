import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Input from './components/Input';
import ImportFile from './components/Import';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ImportFile />
        <Input />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
