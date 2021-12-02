import React from 'react';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25
    }
  }
  render() {
    return (
      <main>
        <h2>Pawmodoro Clock</h2>
      </main>
    );
  }
}

export default App;
