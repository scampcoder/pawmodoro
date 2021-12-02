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
            <section className="main-timer">
                {/*if we we are in a session display Work, if not display Chill*/}
                <h4>{this.state.isSession === true ? "Work" : "Cat Nap"}</h4>
                <span className="timer">{this.props.timerMinute}</span>
                <span className="timer">:</span>
                <span className="timer">{this.state.timerSecond < 10 ? '0' + this.state.timerSecond : this.state.timerSecond}</span>
            </section>
        )
    }
}

export default Timer;