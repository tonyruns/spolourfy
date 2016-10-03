import * as React from 'react';
import { connect } from 'react-redux';

const SonglistPlayer = props => {
  const { uri } = props;
  return (
    <iframe
      src={`https://embed.spotify.com/?uri=${uri}`}
      width="300"
      height="380"
      frameBorder="0"
      allowTransparency="true"
    />
  );
}

const mapStateToProps = state => {
  return {
    uri: state.player
  };
}

const SonglistPlayerContainer = connect(mapStateToProps)(SonglistPlayer);
export default SonglistPlayerContainer;