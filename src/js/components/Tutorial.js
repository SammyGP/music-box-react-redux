
class Step1 extends React.Component {
    render() {
        return(
            <div>
                <p>Give us permission from Spotify to view your playlists</p>
            </div>
        );
    }
}

class Step2 extends React.Component {
    render() {
        return(
            <div>
                <p>Look over your playlists and choose which one you'd like to see videos off and submit it</p>
            </div>
        );
    }
}
class Step3 extends React.Component {
    render() {
        return(
            <div>
                <p>Look over the results and decide if the videos display fit your choises</p>
            </div>
        );
    }
}
class Step4 extends React.Component {
    render() {
        return(
            <div>
                <p>Enjoy your brand new Youtube playlist</p>
            </div>
        );
    }
}

class HowItWorks extends React.Component {
    render() {
        return(
            <div>
                <h1>How it Works</h1>
                <div style={{marginLeft:"10%"}} >
                    <Step1 />
                    <Step2 />
                    <Step3 />
                    <Step4 />
                </div>
            </div>
        );
    }
}

export default HowItWorks;