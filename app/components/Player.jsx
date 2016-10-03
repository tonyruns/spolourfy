import * as React from 'react';
import { connect } from 'react-redux';

const SonglistPlayer = props => {
  const { uri } = props;

  return (
    <div className="player">
      {
        uri
          ? <iframe
              src={`https://embed.spotify.com/?uri=${uri}`}
              width="300"
              height="380"
              frameBorder="0"
              allowTransparency="true"
            />
          : null
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    uri: state.player.uri
  };
}

const SonglistPlayerContainer = connect(mapStateToProps)(SonglistPlayer);
export default SonglistPlayerContainer;