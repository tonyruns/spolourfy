import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMySavedAlbums } from '../actions/spotifyActions';

/**
 * Our user page
 * Displays the user's information
 */
class Albums extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    this.props.onGetSavedAlbums(25, 0);
  }

  /** Render the user's info */
  render() {
    const { albums } = this.props;
    const { loading, items } = albums;

    // Indicate we're still loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="albums">
          { items.map(album => <img key={album.album.id} src={album.album.images[1].url} /> ) }
      </div>
    );
  }
}

const AlbumsContainer = connect(
  state => {
    return {
      albums: state.albums.albums
    }
  },
  dispatch => {
    return {
      onGetSavedAlbums: (limit, offset) => {
        dispatch(getMySavedAlbums(limit, offset));
      }
    };
  }
)(Albums);
export default AlbumsContainer;
