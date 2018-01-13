
class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectUrl: ""
        }
    }
    
    componentWillMount() {
        fetch("http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/auth",{
            headers: {
                "Accept": "application/json"
                }
        })
            .then((response) => { return response.json() })
            .then((data) => { 
                return this.setState({redirectUrl: data.url}) })
    }
    componentDidMount() {
        if(!this.props.token) {
            fetch("http://songbox-env.pp2ggfzqvp.eu-central-1.elasticbeanstalk.com/api/tokens")
                .then((response) => { return response.json() })
                .then((data) => { return this.props.setTokens(data) })
        }
    }

    render() {
        return(
            <div className="auth" ><a href={this.state.redirectUrl}><button>Go to Spotify Authentication</button></a></div>
        );
    }
}

export default Auth;