
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
            <div><a href={this.state.redirectUrl}>Auth here </a></div>
        );
    }
}

export default Auth;