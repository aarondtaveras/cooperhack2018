import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

    

class App extends Component {
  constructor(){
    super();

    this.state = {
      text: "It was the hunter's first time outside Montana. He woke, stricken still with the hours-old vision of ascending through rose-lit cumulus, of houses and barns like specks deep in the snowed-in valleys, all the scrolling country below looking December—brown and black hills streaked with snow, flashes of iced-over lakes, the long braids of a river gleaming at the bottom of a canyon. Above the wing the sky had deepened to a blue so pure he knew it would bring tears to his eyes if he looked long enough.",
      lines: [],
      fonts: [
        "helvetica","verdana","karla","futura"
      ],
      colors: [
          "rgb(42, 83, 147)","rgb(28, 55, 99)","rgb(22, 35, 68)"
        ]
      // colors:
    };
  }

  componentDidMount(){
    this.sliceText();

  }

  generateFont(){
    let index = Math.floor(Math.random()*this.state.fonts.length);
    return this.state.fonts[index];
  }

  generateColor(){
    let index = Math.floor(Math.random()*this.state.colors.length);
    return this.state.colors[index];
  }

  sliceText(){
    var new_lines = [];
    let line = "";
    var count = 0;
    const text_body = this.state.text;
    const words = text_body.split(" ");
    for(let i=0;i<words.length;i++){
      if(count!==5)
      {
        line += (words[i]+" ");
        count ++;
      } 
      else if(count===5)
      {
        if(!this.isPunctuation(words[i].charAt(words[i].length-1))){
          line += (words[i]);
        } else {
          line += (words[i]);
        }
        new_lines.push(line);
        count = 0;
        line = "";
      }
    }
    // if there's anything left
    if(count > 0){
      line = "";
      while(count){
      line += (words[words.length - count] + " ");
      count--;
      }
      new_lines.push(line);
    }
    
    // set our state to our new array of lines
    this.setState({
      lines: new_lines
    })
  }

  isPunctuation(char){
    // console.log(char);
    return (char==="," || char==="." || char==="!" || char==="!");  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.lines.map((line,index)=> {
              let Color = this.generateColor();
              let Font = this.generateFont();
              console.log(Color);
              console.log(Font);
              return(
                <p key={index} style={{fontSize:30,color:Color,fontFamily:Font}}>
                  <strong>{line}</strong>
                </p>
              );
            })
            }
            
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

// export GOOGLE_APPLICATION_CREDENTIALS="./credentials.json";