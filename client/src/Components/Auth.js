import React, { Component } from 'react';
import "./Auth.scss";
import { connect } from "react-redux";
import { setAccessToken, setRefreshToken } from '../Actions/auth-actions';
import { VIEWSTATE_AUTH, VIEWSTATE_PLAYLIST, setViewState } from '../Actions/viewstate-actions';

const URL = "http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com";
const localURL = "http://localhost:8080";

const mapStateToProps = (state) => {
  return {
    access_token: state.authTokens.access_token,
    refresh_token: state.authTokens.refresh_token,
  }
}

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectUrl: ""
        }
    }
    
    componentWillMount() {
      fetch(localURL + "/auth",{
        headers: {
          "Accept": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => this.setState({redirectUrl: data.url}))
    }
    componentDidMount() {
      const token = localStorage.getItem("token");

      if(!this.props.access_token || !token) {
        fetch(localURL + "/api/tokens")
          .then(response => response.json())
          .then(() => { 
            const resUrl = new URLSearchParams(window.location.href)
            const access_token = resUrl.get("access");
            const refresh_token = resUrl.get("refresh");;
            const expire_in =  resUrl.get("expire")
            //localStorage.setItem("token", access_token);
            //localStorage.setItem("refresh", refresh_token);
            this.props.dispatch(setAccessToken(access_token));
            this.props.dispatch(setRefreshToken(refresh_token));
          })
        }
    }
    componentDidUpdate() {
      if(this.props.access_token) {
        this.props.dispatch(setViewState("PLAYLIST"));
      }
    }

    render() {
        return(
            <div className="auth" ><a href={this.state.redirectUrl}><button>Go to Spotify Authentication</button></a></div>
        );
    }
}

export default connect(mapStateToProps)(Auth);
//export default Auth;