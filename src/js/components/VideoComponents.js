


class SecondaryResults extends React.Component {

    render() {
        const STYLE = {
            position:"fixed",
            top:"0",
            width:"40%",
            paddingLeft:"20px",
            display:"inline-block",
            listStyleType:"none"
        };
        const elStyle = {
            border:"1px solid black",
            width:"100%",
            height:"90px",
            margin:"5px",
            backgroundColor:"#cc181e"
        }
        const imgStyle = {
            display: "inline-block",
            float:"left"
        }

        const secondaryResults =  this.props.secondaryResults;
        const display = [];

        secondaryResults.map((item) => { 
            return display.push(
                <li style={elStyle} key={item.etag} >
                    <button style={{float:"right", height:"100%", backgroundColor:"#cc181e"}}>Set</button>
                    <img style={imgStyle} src={item.snippet.thumbnails.default.url} alt={item.snippet.title}/>
                    <p>{item.snippet.title}</p>
                    <p>{item.snippet.channelTitle}</p>
                </li>
            ) 
        })
        if(secondaryResults) {
            return(
            <ul style={STYLE}>
                {display}
            </ul>
            );
        }
        return(
            <ul style={{display:"none"}}>
                {display}
            </ul>
        );
    }
}

class VideoResultConfig extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoId: this.props.results.items[0].id.videoId
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleChangeSongs = this.handleChangeSongs.bind(this);
    }

    handleShow() {
        this.props.onShow(this.props.results);
    }

    handleChangeSongs() {

    }

    render() {

        const imgStyle = {
            display: "inline-block",
            float:"left"
        }
        const elStyle = {
            display:"inline-block",
            width:"40%",
            height:"100%"
        }

        const videoItem = this.props.results;

        return(
            <div>
                <div className="videoList" >
                    <img style={imgStyle} src={videoItem.items[0].snippet.thumbnails.default.url} alt={videoItem.items[0].snippet.title}/>
                    <p style={elStyle} >{videoItem.items[0].snippet.title}</p>
                    <button style={{float:"right"}} onClick={this.handleShow} >SHOW</button>
                </div>
            </div>
        );
    }
}

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            playlist: ["lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk" ,"lbHYyPdQfqk"]
        }

    }
    compononentDidMount() {

        const videoIds = this.props.videoIds;
        const testIds = ["lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk" ,"lbHYyPdQfqk"];
        
        const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
        
        let firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        let player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player(this.youtubePlayerAnchor, {
                height: "390",
                width: "640",
                videoId: testIds[0],
                events: {
                    onStateChange: this.onPlayerStateChange
                }
            });
        }
    }

    onPlayerStateChange(e) {
        if(e.data === -1 && !this.state.loaded) {
            this.player.loadPlaylist({playlist: this.state.playlist});
            this.setState({loaded: true});
        }
    }

    render() {
        console.log(this);
        return(
            <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
        );
    }
}
let loadYT;
class TestYT extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            playlist: this.props.playlist
        }
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }
    componentDidMount () {
        if (!loadYT) {
          loadYT = new Promise((resolve) => {
            const tag = document.createElement('script')
            tag.src = 'https://www.youtube.com/iframe_api'
            const firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
            window.onYouTubeIframeAPIReady = () => resolve(window.YT)
          })
        }
        loadYT.then((YT) => {
          this.player = new YT.Player(this.youtubePlayerAnchor, {
            height: 390,
            width: 640,
            videoId: this.state.playlist[0],
            events: {
              onReady: this.onPlayerStateChange
            }
          })
        })
      }
    
        onPlayerStateChange(e) {
            this.player.loadPlaylist({playlist: this.state.playlist});
 
        }
    
      render () {
        console.log(this);
        return (
          <section className='youtubeComponent-wrapper'>
            <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
          </section>
        )
      }
}

class VideoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoPlaybackButton: false,
            secondaryResults: [],
            videoIds: []
        };

        // gets the id of the first video of each object and sets it as the default video to watch
        this.props.list.map((item) => { 
            if(item.items[0]) {
                return this.state.videoIds.push(item.items[0].id.videoId) 
            } else {
                return this.state.videoIds.push(null)
            }
        })
        this.handleShowSecondary = this.handleShowSecondary.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShowSecondary(e) {
        console.log("show clicked");
        console.log(e.items);
        this.setState({secondaryResults: e.items})
    }

    handleSubmit() {
        this.setState({videoPlaybackButton: true});
        //this.setState({videoIds: ["lbHYyPdQfqk", "lbHYyPdQfqk", "lbHYyPdQfqk" ,"lbHYyPdQfqk"]})
        console.log("Submitted")
        console.log(this);
    }

    handleSongChange(e) {
        // TODO
        // pass this down to the secondary results component
        // filter the videoids for the song mathcing and replace it with the new selected song
        //
        // click set song -> filter function finds current song id -> replaces with set song id
    }


    render() {
        const videoPlaybackButton = this.state.videoPlaybackButton;
        console.log("Render");
        if(videoPlaybackButton) {
            return(
                <TestYT playlist={this.state.videoIds} />
            );
        } else {

            const videoItem = this.props.list;
            let list = [];
            let ID = [];
            videoItem.map((item) => {
                if(item.items[0]) {
                    ID.push(item.items[0].id.videoId);
                    return (list.push(
                        <VideoResultConfig results={item} key={item.etag} onShow={this.handleShowSecondary} />
                    )); 
                }
            })
            return(
                <div style={{marginTop:"-30px", textAlign:"center", position:"relative"}} >
                    <button onClick={this.handleSubmit} id="playlistButton">Go to Playlist</button>
                    {list}
                    {/*<SecondaryResults secondaryResults={this.state.secondaryResults} />*/}
                </div>
            );
        }
    }
}

export default VideoComponent;