import * as React from 'react';
import { connect } from 'react-redux';

import { getUserPlaylists } from '../actions/spotifyActions';
import { updatePlaylistColors } from '../actions/colorActions';

import PlaylistGridlist from '../components/PlaylistGridlist';

export class Playlists extends React.Component {
  componentDidMount() {
    this.props.onGetPlaylists();
  }

  render() {
    const { playlists } = this.props;
    return (
      <div className="Playlists">
        <PlaylistGridlist playlists={playlists} />
      </div>
    );
  }
}

const PlaylistsContainer = connect(
  state => {
    return {
      playlists: state.playlists
    };
  },
  dispatch => {
    return {
      onGetPlaylists: () => {
        dispatch(getUserPlaylists()).then(() => {
          dispatch(updatePlaylistColors())
        });
      }
    };
  }
)(Playlists);
export default PlaylistsContainer;
