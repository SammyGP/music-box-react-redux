import SongComponents from "./components/SongComponents.js";
import VideoComponents from "./components/VideoComponents.js";
import Auth from "./components/Auth.js";
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
            fetch(`http://localhost:3000/user/playlist/${this.state.tokens.access_token}`)
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
        this.setState({tokens: e.tokens});
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
                <div style={{display: "grid", gridTemplateColumns: "25% 25% 25% 25%"}} >
                    {cells}
                </div>
            );
        } else if (this.state.youtubeData && this.state.playlists) {
            return (
                <VideoComponents list={this.state.youtubeData} />
            );
        } else {

            // returns loading screen until the results from the fetch are resolved
            return(
                <div>
                    <Auth setTokens={this.handleAuth} />
                    <h1>Loading</h1>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <Layout />,
    document.getElementById("app")
);