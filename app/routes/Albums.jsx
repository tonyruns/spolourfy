import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMySavedAlbums } from '../actions/spotifyActions';
import { getAlbumColours } from '../actions/colorActions';

import AlbumGridlist from '../components/AlbumGridlist';

/**
 * Our album page
 * Displays albums
 */
class Albums extends Component {
  componentDidMount() {
    // Get saved albums with the limit and offset
    this.props.onGetSavedAlbums(25, 0);
  }

  render() {
    const { albums } = this.props;
    const { loading } = albums;

    // Indicate we're still loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="Albums">
        <AlbumGridlist />
      </div>
    );
  }
}

const AlbumsContainer = connect(
  state => {
    return {
      albums: state.albums
    }
  },
  dispatch => {
    return {
      onGetSavedAlbums: (limit, offset) => {
        dispatch(getMySavedAlbums(limit, offset))
          .then(() => {
            dispatch(getAlbumColours());
          });
      }
    };
  }
)(Albums);
export default AlbumsContainer;
