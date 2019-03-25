import React, { Component } from 'react';
import { connect } from "react-redux";
import "./Nav.scss";

const mapStateToProps = (state) => {
  return {
  viewState: state.viewState.viewState,
  }
}

class Nav extends Component {
  constructor(props) {
      super(props);

      this.state = {
          activeColor: "#930000",
          colorSchema: {
            song: "#2eb039",
            video: "#cc181e",
            auth: "rgba(40, 11, 92, 1)",
          }

      }
  }

  render() {
    let activeColor = "white"
    if(this.props.viewState === "auth") { activeColor = this.state.colorSchema.auth }
    if(this.props.viewState === "playlist") { activeColor = this.state.colorSchema.song }
    if(this.props.viewState === "song-list") { activeColor = this.state.colorSchema.song }
    if(this.props.viewState === "video-list") { activeColor = this.state.colorSchema.video }
    if(this.props.viewState === "video-play") { activeColor = this.state.colorSchema.video }


    return(
      <nav className="nav" style={{boxShadow:`0px 3px 3px ${activeColor}`}} >
        <h1><a href="/">【 Song Box 】 （ジト委）</a></h1>
        <div>
          <h3>Songs</h3>
          <h3>></h3>
          <h3>Results</h3>
          <h3>></h3>
          <h3>Videos</h3>
        </div>
      </nav>
      );
  }
}

export default connect(mapStateToProps)(Nav);