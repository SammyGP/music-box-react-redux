import React, { Component } from 'react';
import { connect } from "react-redux";

class Playlist extends Component {
  render() {
    return(
      <div>
        <h1>Playlist Name</h1>
        <img src="Playlist img" />
        <p><span>Amount of tracks</span><span>Total Minutes</span></p>
        <ul>
          <li>Track1</li>
          <li>Track1</li>
        </ul>
      </div>
    );
  }
}