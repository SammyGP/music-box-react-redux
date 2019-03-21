import SongComponents from "./components/Song-components/SongComponents.js";
import VideoComponents from "./components/Video-components/VideoComponents.js";
import Auth from "./components/Auth.js";
import HowItWorks from "./components/Tutorial.js";

import React, { Component } from 'react';
import Router from "./components/router";
import { Provider } from 'react-redux';

import store from "./store";
import { createStore } from "redux";

const fakeReducer = (state = {me: true}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

let fakeStore = createStore(fakeReducer)

console.log(fakeStore.getState());

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeColor: "#930000",
            defaultColor: "#000000",

        }
    }

    render() {
        const color = this.props.colorSchema;
        return(
            <nav className="nav" style={{boxShadow:`0px 3px 3px ${color}`}} >
                <h1><a href="/">Song Box</a></h1>
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

class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playlists: "",
            youtubeData: "",
            tokens: "",
            error: null
        };

        //this.componentWillMount = this.componentWillMount.bind(this);
        this.handleListSubmit = this.handleListSubmit.bind(this);
        this.handleAuth = this.handleAuth.bind(this); 
    }

    componentDidUpdate() {
        if(!this.state.playlists && this.state.tokens) {
            fetch(`http://localhost:3000/user/playlist/${localStorage.getItem("token")}` /*`http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/user/playlist/${localStorage.getItem("token")}`*/)
            .then((response) => { return response.json() })
            .then((data) => { 
                this.setState({playlists: data.items})
            })
            .catch((error) => {
                this.setState({error});
            })
        }  
    }

    handleListSubmit(e) {
        this.setState({youtubeData: e})
    }
    handleAuth(e) {
        console.log(e);
        this.setState({tokens: e});
    }

    render() {
        console.log("state change")
        console.log(this);
        if(this.state.playlists && !this.state.youtubeData) {

            let cells = [];
            let data = this.state.playlists;
            
            data.map((item) => {
                return (cells.push(
                    <SongComponents 
                        item={item} key={item.id} 
                        onListSubmit={this.handleListSubmit}
                        tokens={this.state.tokens} 
                    />
                ));
            });

            return(
                <div>
                    <Nav view="song" colorSchema="#2eb039" />
                    <div id="songBox-wrapper">
                        {cells}
                    </div>
                </div>
            );
        } else if (this.state.youtubeData && this.state.playlists) {
            return (
                <div>
                    <Nav view="video" colorSchema="#cc181e"/>
                    {<VideoComponents list={this.state.youtubeData} />}
                </div>
            );
        } else {

            // returns loading screen until the results from the fetch are resolved
            return(
                <div>
                    <Nav view="auth" colorSchema="#ffffff" />
                    <Auth setTokens={this.handleAuth} />
                    <HowItWorks />
                </div>
            );
        }
    }
}


ReactDOM.render(
  <Provider store={fakeStore}>
    <Layout />
  </Provider>,
  document.getElementById("app")
  );