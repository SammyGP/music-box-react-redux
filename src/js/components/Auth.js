
class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectUrl: ""
        }
    }
    
    componentWillMount() {
        fetch("http://localhost:3000/auth",{
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
            fetch("http://localhost:3000/api/tokens")
                .then((response) => { return response.json() })
                .then((data) => { return this.props.setTokens(data) })
        }
    }

    render() {
        return(
            <div className="auth" ><a href={this.state.redirectUrl}><button>Auth here</button></a></div>
        );
    }
}

export default Auth;