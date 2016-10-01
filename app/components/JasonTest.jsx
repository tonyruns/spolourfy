import * as React from 'react';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          test: '',
          colours: []
      };
  }

  onClick(evt) {
      this.setState({
          test: 'word'
      });

      fetch('/api/colortest')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
             colours: responseJson
          });
        });
  }

  render() {
    return (
      <div className="App">
      <h1>{test}</h1>
      <button onClick={this.onClick.bind(this)}>Log in with Spotify</button>
      <h1>{this.state.test}</h1>
        {this.state.colours.map(function(colour, i) {
          return (
              <div style={{float: 'left'}} key={i}>
                  <div style={{width: 100, height: 100, backgroundColor: `rgb(${colour.colour._rgb[0]}, ${colour.colour._rgb[1]}, ${colour.colour._rgb[2]})`}} />
                  <img src={colour.album} style={{width: 100, height:100, }}/>
              </div>
          );
        })}
      </div>
    );
  }
}

export default App;
