import React from 'react';
import '../App.css';
import Break from './BreakComponent';
import Session from './SessionComponent';
import Timer from './MainTimerComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
  }
  render() {
    return (
      <main>
        <h2>Pawmodoro Clock</h2>
        <Timer timerMinute={this.state.timerMinute} />
        <section className="intervals-container">
          <Break breakLength={this.state.breakLength} />
          <Session sessionLength={this.state.sessionLength} />
        </section>
      </main>
    );
  }
}

export default App;
