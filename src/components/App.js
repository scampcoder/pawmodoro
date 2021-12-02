import React from 'react';
import '../App.css';
import Break from './BreakComponent';
import Session from './SessionComponent';

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
        <Break breakLength={this.state.breakLength} />
        <Session sessionLength={this.state.sessionLength} />
      </main>
    );
  }
}

export default App;
