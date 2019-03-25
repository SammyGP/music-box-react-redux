import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAccessToken } from '../actions/auth';

const URL = "http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com";
const localURL = "http://localhost:3000";

const mapStateToProps = (state) => {
  return {
    access_token: state.access_token,
    refresh_token: state.refresh_token,
  }
}

class Auth extends React.Component {
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
      this.props.dispatch(setAccessToken("TEST"))
        const token = localStorage.getItem("token");
        if(!this.props.token || !token) {
            fetch(localURL + "/api/tokens")
                .then(response => response.json())
                .then(() => { 
                  const resUrl = new URLSearchParams(window.location.href)
                  const access_token = window.location.hash.substring(1);
                  const refresh_token = resUrl.get("refresh");
                  const expire_in =  resUrl.get("expire")
                  localStorage.setItem("token", access_token);
                  localStorage.setItem("refresh", refresh_token);
                  return this.props.setTokens(access_token) 
                })
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