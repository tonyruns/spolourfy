import './Playlist.scss';
import * as React from 'react';
import { connect } from 'react-redux';

import { getPlaylistTracks } from '../actions/spotifyActions';

import ColorImage from './ColorImage';

const getImageUrl = playlist => playlist.images.length ? playlist.images[0].url : null;

export class Playlist extends React.Component {
  render() {
    const { playlist, rgb, onGetPlaylistTracks } = this.props;
    const imageUrl = getImageUrl(playlist);
    return (
      <div className="Playlist" onClick={() => this.props.onGetPlaylistTracks()}>
        <ColorImage src={imageUrl} rgb={rgb} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const imageUrl = getImageUrl(ownProps.playlist);
  const colors = state.colors[imageUrl];
  const rgb = colors ? colors.rgb : null;
  return {
    rgb
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetPlaylistTracks: () => {
      const playlistId = ownProps.playlist.id;
      const userId = ownProps.playlist.owner.id;
      dispatch(getPlaylistTracks(userId, playlistId));
    }
  };
}

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);
export default PlaylistContainer;
