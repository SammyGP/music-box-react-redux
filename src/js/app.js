import SongComponents from "./components/SongComponents.js";
import VideoComponents from "./components/VideoComponents.js";
import Auth from "./components/Auth.js";
import HowItWorks from "./components/Tutorial.js";


class Nav extends React.Component {
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
            tokens: ""
        };

        //this.componentWillMount = this.componentWillMount.bind(this);
        this.handleListSubmit = this.handleListSubmit.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state)
        if(!this.state.playlists && this.state.tokens) {
            fetch(`http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/user/playlist/${localStorage.getItem("token")}`)
            .then((response) => { return response.json() })
            .then((data) => { 
                this.setState({playlists: data.items})
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
                    <div style={{display: "grid", gridTemplateColumns: "25% 25% 25% 25%"}} >
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
    <Layout />,
    document.getElementById("app")
);