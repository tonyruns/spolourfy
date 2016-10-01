import './App.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    var test = "Spolourfy";
    return (
      <div className="App">
        <h1>{test}</h1>
        <button>Log in with Spotify</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
