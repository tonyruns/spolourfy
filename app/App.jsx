import './App.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as flexBox from 'flexboxgrid';

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
    const test = "Spolourfy";
    // const sorted = this.state.colours.filter(c => c.hsv).sort(function(x, y){return x.hsv[1] - y.hsv[1];});
    const sorted = [{"rgb":[248,37,28,1],"hsv":["HSV",0.0068181818181818205,0.8870967741935485,0.9725490196078431,1],"url":"https://i.scdn.co/image/a2c9521ed997b8fcccad981b94efc771e619e7d6","albumColors":[{"_rgb":[248,37,28,1]},{"_rgb":[58,38,30,1]},{"_rgb":[250,216,11,1]},{"_rgb":[242,237,214,1]},{"_rgb":[160,140,148,1]}]},{"rgb":[171,122,101,1],"hsv":["HSV",0.050000000000000024,0.4093567251461988,0.6705882352941176,1],"url":"https://i.scdn.co/image/bfc05478ce213fa96fafda944b43b5f425d24619","albumColors":[{"_rgb":[7,21,33,1]},{"_rgb":[171,122,101,1]},{"_rgb":[107,150,173,1]},{"_rgb":[75,105,118,1]},{"_rgb":[72,126,155,1]}]},{"rgb":[198,148,119,1],"hsv":["HSV",0.06118143459915614,0.398989898989899,0.7764705882352941,1],"url":"https://i.scdn.co/image/440945ae1b90c2eda8ba0b527081c98ed33daad3","albumColors":[{"_rgb":[198,148,119,1]},{"_rgb":[34,22,28,1]},{"_rgb":[241,243,240,1]},{"_rgb":[109,58,51,1]},{"_rgb":[147,140,5,1]}]},{"rgb":[202,153,124,1],"hsv":["HSV",0.06196581196581197,0.3861386138613861,0.792156862745098,1],"url":"https://i.scdn.co/image/1c870fdb0e501ba15d1e86682c6c1c03ef6550c8","albumColors":[{"_rgb":[129,91,97,1]},{"_rgb":[45,45,43,1]},{"_rgb":[235,233,231,1]},{"_rgb":[145,156,194,1]},{"_rgb":[202,153,124,1]}]},{"rgb":[110,83,55,1],"hsv":["HSV",0.08484848484848484,0.5,0.43137254901960786,1],"url":"https://i.scdn.co/image/a3ae140da51a0a7fa8384052e3cd0814c25f2287","albumColors":[{"_rgb":[4,4,4,1]},{"_rgb":[110,83,55,1]},{"_rgb":[57,40,28,1]},{"_rgb":[73,60,52,1]},{"_rgb":[76,70,60,1]}]},{"rgb":[175,157,66,1],"hsv":["HSV",0.13914373088685017,0.6228571428571428,0.6862745098039216,1],"url":"https://i.scdn.co/image/8327a2fdc10f072e1de4ace9df8535c170e507a9","albumColors":[{"_rgb":[245,244,243,1]},{"_rgb":[27,28,24,1]},{"_rgb":[175,157,66,1]},{"_rgb":[119,105,55,1]},{"_rgb":[99,108,104,1]}]},{"rgb":[175,157,66,1],"hsv":["HSV",0.13914373088685017,0.6228571428571428,0.6862745098039216,1],"url":"https://i.scdn.co/image/8327a2fdc10f072e1de4ace9df8535c170e507a9","albumColors":[{"_rgb":[245,244,243,1]},{"_rgb":[27,28,24,1]},{"_rgb":[175,157,66,1]},{"_rgb":[119,105,55,1]},{"_rgb":[99,108,104,1]}]},{"rgb":[233,223,126,1],"hsv":["HSV",0.15109034267912774,0.45922746781115875,0.9137254901960784,1],"url":"https://i.scdn.co/image/8c7e22cd41782fa6a43b0b102cc1a5c5d1fd76fd","albumColors":[{"_rgb":[233,223,126,1]},{"_rgb":[58,98,30,1]},{"_rgb":[70,118,192,1]},{"_rgb":[153,222,241,1]},{"_rgb":[157,144,80,1]}]},{"rgb":[247,232,9,1],"hsv":["HSV",0.1561624649859944,0.9635627530364372,0.9686274509803922,1],"url":"https://i.scdn.co/image/1405709d01534cca43d7277e4615eba60e1f6ebe","albumColors":[{"_rgb":[18,18,16,1]},{"_rgb":[247,232,9,1]},{"_rgb":[216,217,203,1]},{"_rgb":[125,107,36,1]},{"_rgb":[116,132,121,1]}]},{"rgb":[247,248,9,1],"hsv":["HSV",0.16736401673640164,0.9637096774193549,0.9725490196078431,1],"url":"https://i.scdn.co/image/d961b862d54c1d4489dc4d246182cd31d77a2711","albumColors":[{"_rgb":[16,17,15,1]},{"_rgb":[247,248,9,1]},{"_rgb":[212,223,221,1]},{"_rgb":[112,136,135,1]},{"_rgb":[124,114,29,1]}]},{"rgb":[240,246,21,1],"hsv":["HSV",0.1711111111111111,0.9146341463414633,0.9647058823529412,1],"url":"https://i.scdn.co/image/5738d414691b857c9e34344da22b7c64d7f9f7d2","albumColors":[{"_rgb":[34,45,24,1]},{"_rgb":[240,246,21,1]},{"_rgb":[231,236,231,1]},{"_rgb":[125,116,9,1]},{"_rgb":[114,148,50,1]}]},{"rgb":[31,122,60,1],"hsv":["HSV",0.3864468864468864,0.7459016393442622,0.47843137254901963,1],"url":"https://i.scdn.co/image/9b80f7bc41c91e12c61f54cd38b56481d863716f","albumColors":[{"_rgb":[31,122,60,1]},{"_rgb":[235,206,150,1]},{"_rgb":[144,29,53,1]},{"_rgb":[104,177,161,1]},{"_rgb":[138,165,32,1]}]},{"rgb":[31,122,60,1],"hsv":["HSV",0.3864468864468864,0.7459016393442622,0.47843137254901963,1],"url":"https://i.scdn.co/image/9b80f7bc41c91e12c61f54cd38b56481d863716f","albumColors":[{"_rgb":[31,122,60,1]},{"_rgb":[235,206,150,1]},{"_rgb":[144,29,53,1]},{"_rgb":[104,177,161,1]},{"_rgb":[138,165,32,1]}]},{"rgb":[115,183,202,1],"hsv":["HSV",0.5363984674329502,0.43069306930693063,0.792156862745098,1],"url":"https://i.scdn.co/image/cd10d7e03a02b63b903912f3cabdc35c108bb9d2","albumColors":[{"_rgb":[59,41,31,1]},{"_rgb":[115,183,202,1]},{"_rgb":[214,155,123,1]},{"_rgb":[58,134,171,1]},{"_rgb":[141,88,47,1]}]},{"rgb":[16,123,180,1],"hsv":["HSV",0.5579268292682926,0.9111111111111111,0.7058823529411765,1],"url":"https://i.scdn.co/image/a919f0019370c1431d3b9bec217ed4239c0a54a9","albumColors":[{"_rgb":[215,202,182,1]},{"_rgb":[22,48,54,1]},{"_rgb":[16,123,180,1]},{"_rgb":[99,171,216,1]},{"_rgb":[48,106,121,1]}]},{"rgb":[105,169,205,1],"hsv":["HSV",0.5599999999999999,0.48780487804878053,0.803921568627451,1],"url":"https://i.scdn.co/image/d168e912f42a04ea8d23b8cc9c6689b7a216cb29","albumColors":[{"_rgb":[230,203,177,1]},{"_rgb":[27,65,56,1]},{"_rgb":[105,169,205,1]},{"_rgb":[139,113,100,1]},{"_rgb":[167,194,197,1]}]},{"rgb":[114,158,185,1],"hsv":["HSV",0.5633802816901408,0.38378378378378375,0.7254901960784313,1],"url":"https://i.scdn.co/image/0bb71c03a9fe2b8c2faadd6fe97f24169abd09a2","albumColors":[{"_rgb":[55,74,76,1]},{"_rgb":[230,206,178,1]},{"_rgb":[151,141,125,1]},{"_rgb":[114,158,185,1]},{"_rgb":[172,192,194,1]}]}];
    return (
      <div className="App">
        <h1>{test}</h1>
        <button onClick={this.onClick.bind(this)}>Log in with Spotify</button>
        <h1>{this.state.test}</h1>
        <div className="row">
        {sorted.map(albums => <Album key={albums.url} color={albums.rgb} url={albums.url} />)}
        </div>
      </div>
    );
  }
}

const Album = props => {
  const { color, url } = props;
  return (
    <div className = "Album col-sm-2 col-xs-3">
        <img src={url}/>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));