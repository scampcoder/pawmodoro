import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSession: true
        }
    }
    
    render() {
        return (
            <React.Fragment>
                {/*if we we are in a session display Work, if not display Chill*/}
                <h4>{this.state.isSession === true ? "Work" : "Chill"}</h4>
            </React.Fragment>
        )
    }
}

export default Timer;