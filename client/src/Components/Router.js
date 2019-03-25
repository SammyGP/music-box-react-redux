import React, { Component } from 'react';
import { connect } from "react-redux";
import Auth from "./Auth";
import Tutorial from "./Tutorial";
import Loading from "./Loading";

const mapStateToProps = (state) => {
  return {
    viewState: state.viewState.viewState,
  }
}
 
class Router extends Component {
  render() {
    const viewState = this.props.viewState;
    switch(viewState) {
      case "auth":
        return <div><Auth /><Tutorial /></div>

      case "playlist":
        return <h1>TEST</h1>
        
      case "loading":
        return <Loading />;
      default:
        return <h1>LOADING</h1>
    }
  }
}

export default connect(mapStateToProps)(Router);