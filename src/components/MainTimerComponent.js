import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSession: true,
            timerSecond: 0
        }
    }
    
    render() {
        return (
            <React.Fragment>
                {/*if we we are in a session display Work, if not display Chill*/}
                <h4>{this.state.isSession === true ? "Work" : "Chill"}</h4>
                <span>{this.props.timerMinute}</span>
                <span>:</span>
                <span>{this.state.timerSecond < 10 ? '0' + this.state.timerSecond : this.state.timerSecond}</span>
            </React.Fragment>
        )
    }
}

export default Timer;