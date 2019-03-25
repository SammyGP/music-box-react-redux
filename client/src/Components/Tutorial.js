import React, { Component } from 'react';
import { connect } from "react-redux";
import "./Tutorial.scss";

const StartTutorial = () => {
  return <button>How It Works</button>
}

const Step1 = () => {
    return(
        <div className="step1">
            <h1>Step 1</h1>
            <p>Click here allow us to view your Spotify playlists</p>
        </div>
    );
}

const Step2 = () => {
    return(
        <div className="step2">
            <h1>Step 2</h1>
            <p>Here you will see a list of all your Spotify playlits look through them and choose which one you'd like to continue with</p>
        </div>
    );
}

const Step3 = () => {
    return(
        <div className="step3">
            <h1>Step 3</h1>
            <p>We will look through Youtube for the songs best fitting your playlist but they might not be the best for you, so here you can choose between the top 5 results for each song</p>
            <p>Once done you can click on submit to start the playback</p>
        </div>
    );
}

const Step4 = () => {
    return(
        <div className="step4">
            <h1>Step 4</h1>
            <p>Here an unlisted Youtube playlist will be created of the song you chose</p>
            <p>Please enjoy</p>
        </div>
    );
}

const StepX = () => {
    return(
        <div className="stepx">
            <h1>Step X</h1>
            <p>This is a work in progress if you get any issues or you have some feedback to hesitate to click the questionmark</p>
        </div>
    );
}

class Tutorial extends Component {
  render() {
    return(
      <div className="tutorial" >
        <StartTutorial />
      </div>
    );
  }
}

export default Tutorial;