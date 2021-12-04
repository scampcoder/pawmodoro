import React from "react";
import "../App.css";
import Break from "./BreakComponent";
import Session from "./SessionComponent";
import Timer from "./MainTimerComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
    };
    this.increaseBreak = this.increaseBreak.bind(this);
    this.decreaseBreak = this.decreaseBreak.bind(this);
    this.increaseSession = this.increaseSession.bind(this);
    this.decreaseSession = this.decreaseSession.bind(this);
    this.timerToggle = this.timerToggle.bind(this);
    this.runTimer = this.runTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  increaseBreak() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  }

  decreaseBreak() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  }

  increaseSession() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.timerMinute + 1,
      };
    });
  }

  decreaseSession() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.timerMinute - 1,
      };
    });
  }

  runTimer() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  timerToggle(isSession) {
    if(isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  resetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

  render() {
    return (
      <main>
        <h2>Pawmodoro</h2>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          timerToggle={this.timerToggle}
          runTimer={this.runTimer}
          resetTimer={this.resetTimer}
        />
        <section className="intervals-container">
          <Break
            breakLength={this.state.breakLength}
            increaseBreak={this.increaseBreak}
            decreaseBreak={this.decreaseBreak}
          />
          <Session
            sessionLength={this.state.sessionLength}
            increaseSession={this.increaseSession}
            decreaseSession={this.decreaseSession}
          />
        </section>
      </main>
    );
  }
}

export default App;
