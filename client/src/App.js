import React, { Component } from 'react';
import './App.scss';
import Router from "./Components/Router";
import Nav from "./Components/Nav";
import Auth from "./Components/Auth";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router />
      </div>
    );
  }
}

export default App;
