import * as React from 'react';

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
}

export default App;
