import * as React from 'react';
import { connect } from 'react-redux';

import { getUserPlaylists } from '../actions/spotifyActions';

import PlaylistGridlist from '../components/PlaylistGridlist';

export class Playlists extends React.Component {
  componentDidMount() {
    this.props.onGetPlaylists();
  }

  render() {
    const { playlists } = this.props;
    console.log(playlists);
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
        dispatch(getUserPlaylists());
      }
    };
  }
)(Playlists);
export default PlaylistsContainer;
