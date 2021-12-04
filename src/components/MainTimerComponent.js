import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }
        this.play = this.play.bind(this);
        this.runTimer = this.runTimer.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    play() {
        let intervalId = setInterval(this.runTimer, 1000);
        this.setState({
            intervalId: intervalId
        })
    }

    stop() {
        clearInterval(this.state.intervalId);
    }

    reset() {
        this.stop();
        this.props.resetTimer();
        this.setState({
            timerSecond: 0
        })
    }

    runTimer() {
        switch(this.state.timerSecond) {
            case 0:
                if(this.props.timerMinute === 0) {
                    this.setState({
                        isSession: !this.state.isSession
                    })
                    this.props.timerToggle(this.state.isSession);
                }
                this.props.runTimer()
                this.setState({
                    timerSecond: 59
                })
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }
    
    render() {
        return (
            <section>
                <section className="main-timer">
                    {/*if we we are in a session display Work, if not display Chill*/}
                    <h4>{this.state.isSession === true ? "Work" : "Cat Nap"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.timerSecond < 10 ? '0' + this.state.timerSecond : this.state.timerSecond}</span>
                </section>
                <section className="action-btns">
                    <button onClick={this.play}><FontAwesomeIcon icon={faPlay} /></button>
                    <button onClick={this.stop}><FontAwesomeIcon icon={faPause} /></button>
                    <button onClick={this.reset}><FontAwesomeIcon icon={faSyncAlt} /></button>
                </section>
            </section>
        )
    }
}

export default Timer;