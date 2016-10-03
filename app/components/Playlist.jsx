import './Playlist.scss';
import * as React from 'react';
import { connect } from 'react-redux';

import { getPlaylistTracks } from '../actions/spotifyActions';
import { updatePlaylistTracksColors } from '../actions/colorActions';

import ColorImage from './ColorImage';
import TrackGridlist from './TrackGridlist';

const getImageUrl = playlist => playlist.images.length ? playlist.images[0].url : null;

export class Playlist extends React.Component {
  render() {
    const { playlist, rgb, onGetPlaylistTracks } = this.props;
    const imageUrl = getImageUrl(playlist);
    return (
      <div className="Playlist" onClick={() => this.props.onGetPlaylistTracks()}>
        <h4>{playlist.name}</h4>
        <ColorImage src={imageUrl} />
        {
          playlist.tracks.items
            ? <TrackGridlist tracks={playlist.tracks} />
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetPlaylistTracks: () => {
      const playlistId = ownProps.playlist.id;
      const userId = ownProps.playlist.owner.id;
      dispatch(getPlaylistTracks(userId, playlistId))
        .then(() => dispatch(updatePlaylistTracksColors(playlistId)));
    }
  };
}

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);
export default PlaylistContainer;
