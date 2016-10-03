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
  componentDidMount() {
    this.props.onGetPlaylistTracks();
  }

  onClick() {
    // this.props.onPlayPlaylist();
    this.props.onGetColors();
  }

  render() {
    const { playlist } = this.props;
    const imageUrl = getImageUrl(playlist);
    return (
      <div className="Playlist">
        <h3 className="Playlist-name">{playlist.name}</h3>
        <div className="row">
          <div className="Playlist-image col-xs-2">
            <ColorImage src={imageUrl} onClick={() => this.onClick()} />
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
      dispatch(getPlaylistTracks(userId, playlistId));
    },
    onGetColors: () => {
      const playlistId = ownProps.playlist.id;
      dispatch(updatePlaylistTracksColors(playlistId));
    }
  };
}

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);
export default PlaylistContainer;
