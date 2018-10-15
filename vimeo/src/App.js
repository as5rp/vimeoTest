import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//using carousel style from React https://www.npmjs.com/package/react-responsive-carousel

class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="monsoon">
        <img src={'./monsoon.jpg'} alt="Monsoon" style={{float: 'left', padding: '20px', width: '60%'}}/>
        <h2> MONSOON III </h2>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

        <div className="beams">
            <img src={'./beams.jpg'} alt="Beams" style={{float: 'right', padding: '20px', width: '60%'}}/>
            <h2> BEAMS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="move">
          <img src={'./movie2.jpg'} alt="Move 2" style={{float: 'left', padding: '20px', width: '60%'}}/>
          <h2> MOVE 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div textAlign='center'>

        <Carousel width="500px"  infiniteLoop={true} showStatus={false} showThumbs={false} showIndicators={false}>
          <div>
            <img src={'./movieTitle.jpg'} alt=""/>
            <p style={{backgroundColor: 'white', color: 'black'}}>Movie 1</p>
            <p className="Movie" style={{backgroundColor: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
          <div>
            <img src={'./titanic.jpg'} alt=""/>
            <p style={{backgroundColor: 'white', color: 'black'}}>Movie 2</p>
            <p className="Movie" style={{backgroundColor: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
          <div>
            <img src={'./up.jpg'} alt=""/>
            <p style={{backgroundColor: 'white', color: 'black'}}>Movie 3</p>
            <p className="Movie" style={{backgroundColor: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
          <div>
            <img src={'./ww.jpg'} alt=""/>
            <p style={{backgroundColor: 'white', color: 'black'}}>Movie 4</p>
            <p className="Movie" style={{backgroundColor: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
        </Carousel>
        </div>

      </div>
    );
  }
}

export default App;
