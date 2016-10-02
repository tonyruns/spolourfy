import * as React from 'react';

import './App.scss';

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
      fetch('/api/colortest/men at work')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
             colours: responseJson
          });
        });
  }

  render() {
    var test = "Spolourfy";
    var sorted = this.state.colours.filter(c => c.hsv).sort(function(x, y){return x.hsv[1] - y.hsv[1];});
    console.log(sorted);
    return (
      <div className="App">
        <h1>{test}</h1>
        <button onClick={this.onClick.bind(this)}>Log in with Spotify</button>
        <h1>{this.state.test}</h1>
        {sorted.map(function(albums, i) {
            console.log(albums.hsv[1]);
            return (
                <div style={{float: 'left'}} key={i}>
                    <div style={{width: 100, height: 100, backgroundColor: `rgb(${albums.rgb[0]}, ${albums.rgb[1]}, ${albums.rgb[2]})`}} />
                    <div style={{position: 'relative'}}>
                        <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 100, backgroundColor: `rgba(${albums.rgb[0]}, ${albums.rgb[1]}, ${albums.rgb[2]}, 0.6)` }} />
                        <img src={albums.url} style={{width: 100, height:100, }}/>
                    </div>
                </div>
            );
          })}
      </div>
    );
  }
}

export default App;
