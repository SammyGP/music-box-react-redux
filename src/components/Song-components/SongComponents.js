//import "./SongComponents.css";

const URL = "http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com";
const localURL = "http://localhost:3000";

class Loading extends React.Component {
    render() {
        return(
            <div>
                <h1>Loading</h1>
            </div>
        );
    }
}

class TrackItem extends React.Component {
    render() {

        let artists = this.props.track.track.artists.map((artist) => {return artist.name + " "})

        return(
            <div>
                <li>{this.props.track.track.name} - {artists} </li>
            </div>
        );
    }
}


class Tracklist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tracks: [],
            loading: false
        }

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        this.setState({loading: true})
        fetch(`${localURL}/playlist/${this.props.user}/${this.props.id}/${localStorage.getItem("token")}`)
        .then((response) => { return response.json() })
        .then((data) => { 
            this.setState({loading: false})
            return this.setState({tracks: data.tracks.items}) 
        })
    }

    render() {

        if(this.state.loading) {
            return( <Loading /> );
        }

        let tracks = [];
        const data = this.state.tracks
        data.map((track) => {return tracks.push(
            <TrackItem track={track} key={track.track.id} />
        )});
        return(
            <div  className="tracklist">
                {tracks}
            </div>
        );
    }
}

class SongComponents extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            viewButton: false,
            submitButton: false,
            loading: false
        }

        this.handleClickView = this.handleClickView.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClickView(e) {
        console.log("view Button Clicked")
        if(this.state.viewButton) {
            this.setState({viewButton:false})
        } else {
            this.setState({viewButton:true})
        }
    }

    handleSubmit(e) {
        console.log("submit button clicked");
        console.log(this);

        this.setState({loading: true})
        fetch(`${localURL}/convert/${localStorage.getItem("token")}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            method: "POST",
            body: JSON.stringify({playlist_url: this.props.item.tracks.href})
        })
        .then((response) => { return response.json() })
        .then((response) => { 
            console.log(response)
            this.setState({loading: false})
            return this.props.onListSubmit(response) })
    }

    render() {
        const viewButton = this.state.viewButton;
        const list = this.props.item;
        
        // checks if img of chosen size exist // 2nd part checks for bigger img if first not found
        let imgItem = list.images[1] ? list.images[1].url : list.images[0] ? list.images[0].url : "https://picsum.photos/300/?blur";

        if(this.state.loading) {
            return ( <Loading /> );
        }
        
        if(viewButton) {
            return(
                <div className="songList" >
                    <button onClick={this.handleClickView} >View</button>
                    <button onClick={this.handleSubmit} >Submit</button>
                    <Tracklist id={list.id} user={list.owner.id} tokens={localStorage.getItem("token")} />
                </div>
            );
        } else {
            return(
                
                <div className="songBox box-shadow">
                    <img 
                        src={imgItem} 
                        alt={list.name} 
                    />
                    <div>
                        <h3>{list.name}</h3>
                        <p>From: {list.owner.display_name}</p>
                        <p>Songs: {list.tracks.total}</p>
                        <div>
                            <button onClick={this.handleClickView} >View</button>
                            <button onClick={this.handleSubmit} >Submit</button>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}
export default SongComponents;