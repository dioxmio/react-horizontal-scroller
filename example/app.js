import React, { Component } from 'react';
import { ReactHorizontalScroller } from '../src/react-horizontal-scroller';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Horizontal Scroller Example</h1>
        </header>
        <ReactHorizontalScroller>
          <div className="first-div">
            First Div
          </div>
          <div className="second-div">
            Second Div
          </div>
          <div className="third-div">
            Third Div
          </div>
        </ReactHorizontalScroller>
      </div>
    );
  }
}

export default App;
