import './App.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          test: ''
      };
  }

  onClick(evt) {
      this.setState({
          test: 'word'
      });

      fetch('/api/colortest')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        });


  }

  render() {
    var test = "Spolourfy";
    return (
      <div className="App">
        <h1>{test}</h1>
        <button onClick={this.onClick.bind(this)}>Log in with Spotify</button>
        <h1>{this.state.test}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
