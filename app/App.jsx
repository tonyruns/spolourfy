import './App.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello friends!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
