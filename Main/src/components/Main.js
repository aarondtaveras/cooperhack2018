import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button} from 'react-bootstrap';



class Main extends Component {
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

    // var current_color;
    // this.state.current_theme.name==="default" ? current_color = this.state.themes.default.primary : current_color = this.state.themes.dark.primary;
    // console.log(current_color);

    return (

      // <div className="NavClass">
      // <Navbar collapseOnSelect>
      //   <Navbar.Header>
      //     <h1>WeRead</h1>
      //     <Navbar.Toggle />
      //   </Navbar.Header>
      //   <Navbar.Collapse>
      //     <Nav pullRight>
      //       <NavItem eventKey={1} href="#">
      //         {/* <Button onClick={this.switchTheme} bsStyle="primary">Themes</Button> */}
      //       </NavItem>
      //     </Nav>
      //   </Navbar.Collapse>
      //   </Navbar>;
      // </div>


      <div className="MainBox" style={{backgroundColor: this.state.current_theme.color}}>
        <Button onClick={this.switchTheme} bsStyle="primary">Themes</Button>
        <h1>Machine Learning!</h1>
      </div>
    );
  }
}


export default Main;
