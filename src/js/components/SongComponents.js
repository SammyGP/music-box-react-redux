class TrackItem extends React.Component {
    render() {

        let artists = this.props.track.track.artists.map((artist) => {return artist.name + " "})

        return(
            <div style={{border:"1px solid black", padding:"5px"}} >
                <li>{this.props.track.track.name} - {artists} </li>
            </div>
        );
    }
}


class Tracklist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tracks: []
        }

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        console.log(this)
        fetch(`http://localhost:3000/playlist/${this.props.user}/${this.props.id}/${this.props.tokens.access_token}`)
        .then((response) => { return response.json() })
        .then((data) => { return this.setState({tracks: data.tracks.items}) })
    }

    render() {

        const STYLE = {
            overflow:"scroll",
            fontSize: "0.8em"

        }

        let tracks = [];
        const data = this.state.tracks
        data.map((track) => {return tracks.push(
            <TrackItem track={track} key={track.track.id} />
        )});
        
        return(
            <div style={STYLE} >
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
        }

        this.handleClickView = this.handleClickView.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClickView(e) {
        e.preventDefault();
        console.log("view Button Clicked")
        this.setState({viewButton:true})
    }

    handleSubmit(e) {
        console.log("submit button clicked");
        console.log(this);
        fetch(`http://localhost:3000/convert/${this.props.tokens.access_token}`,{
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
            return this.props.onListSubmit(response) })
    }

    render() {
        const viewButton = this.state.viewButton;
        const list = this.props.item;
        // checks if img of chosen size exist // 2nd part checks for bigger img if first not found
        let imgItem = list.images[1] ? list.images[1].url : list.images[0] ? list.images[0].url : "";
        
        if(viewButton) {
            return(
                <Tracklist id={list.id} user={list.owner.id} tokens={this.props.tokens} />
            );
        } else {
            return(
                
                <div className="listItem">
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