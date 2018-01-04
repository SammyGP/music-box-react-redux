import SongComponents from "./components/SongComponents.js";
import VideoComponents from "./components/VideoComponents.js";
class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playlists: "",
            youtubeData: "",
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleListSubmit = this.handleListSubmit.bind(this);
    }

    componentWillMount() {
        fetch(`http://localhost:3000/user/playlist`)
        .then((response) => { return response.json() })
        .then((data) => { 
            this.setState({playlists: data.items})
            console.log(this);
        })
    }

    handleListSubmit(e) {
        console.log(this)
        this.setState({youtubeData: e})
    }

    render() {

        console.log("state change")

        if(this.state.playlists && !this.state.youtubeData) {

            let cells = [];
            let data = this.state.playlists;
            
            data.map((item) => {
                return (cells.push(
                    <SongComponents item={item} key={item.id} onListSubmit={this.handleListSubmit} />
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