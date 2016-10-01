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
    var test = "Spolourfy";
    var sorted = this.state.colours.sort(function(x, y){return x.hsv[1] - y.hsv[1];});
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
                    <img src={albums.url} style={{width: 100, height:100, }}/>
                </div>
            );
          })}
      </div>
    );
  }
}

export default App;
