import './Playlist.scss';
import * as React from 'react';
import { connect } from 'react-redux';

import { getPlaylistTracks } from '../actions/spotifyActions';
import { updatePlaylistTracksColors } from '../actions/colorActions';
import { changeSong } from '../actions/playerActions';

import ColorImage from './ColorImage';
import TrackGridlist from './TrackGridlist';

const getImageUrl = playlist => playlist.images.length ? playlist.images[0].url : null;

export class Playlist extends React.Component {
  onClick() {
    this.props.onPlayPlaylist();
    this.props.onGetPlaylistTracks();
  }
  render() {
    const { playlist, rgb, onGetPlaylistTracks } = this.props;
    const imageUrl = getImageUrl(playlist);
    return (
      <div className="Playlist" onClick={() => this.onClick()}>
        <h4>{playlist.name}</h4>
        <div className="row">
          <div className="Playlist-image col-xs-2">
            <ColorImage src={imageUrl} />
          </div>
          <div className="col-xs">
            {
              playlist.tracks.items
                ? <TrackGridlist tracks={playlist.tracks} />
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPlayPlaylist: () => {
      dispatch(changeSong(ownProps.playlist.uri));
    },
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
